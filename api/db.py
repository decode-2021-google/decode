import psycopg2
from pandas import DataFrame
from sqlalchemy import create_engine


class Connection:

    __dict = {'pomodoro': {'user': 'pomodoro',
                           'password': 'pomodoro',
                           'host': '35.225.209.69',
                           'port': '5432',
                           'database': 'postgres'
                        },
              }

    def __init__(self, user):
        if user not in self.__dict:
            raise ValueError('Invalid user:', user)

        dict_ = self.__dict[user]

        self.user = dict_['user']
        self.password = dict_['password']
        self.host = dict_['host']
        self.port = dict_['port']
        self.database = dict_['database']

        self.conn = None
        self.cursor = None
        self.engine = None

        self.connect()
        self.create_engine()

    def connect(self):
        self.conn = psycopg2.connect(user=self.user,
                                      password=self.password,
                                      host=self.host,
                                      port=self.port,
                                      database=self.database)

        self.cursor = self.conn.cursor()

    def disconnect(self):
        self.conn.close()

    def create_engine(self):
        self.engine = create_engine('postgres://{0}:{1}@{2}:{3}/{4}'.format(self.user, self.password, self.host, self.port, self.database))

    def query(self, query):
        self.cursor.execute(query)
        return self.cursor.fetchall()

    def query_pandadf(self, query, index_columns=None):
        row_data = self.query(query)
        column_names = [desc[0] for desc in self.cursor.description]

        df = DataFrame(row_data, columns=column_names)

        if index_columns is not None:
            df.set_index(index_columns, inplace=True)

        return df

    def read_file(self, file):
        return open(file, 'r').read()

    def query_file(self, file, pandas=True):
        query = self.__read_file(file)

        if pandas:
            return self.query_pandadf(query)
        else:
            return self.query(query)

    def execute(self, query, commit=True):
        self.cursor.execute(query)

        if commit:
            self.conn.commit()


def upsert(from_conn_id, from_table, to_conn_id, to_table, from_schema='public', to_schema='public', overwrite=False):
    print('{0} ({1}) -> {2} ({3})'.format(from_table, from_conn_id, to_table, to_conn_id))
    if overwrite is True:
        overwrite = 'replace'
    else:
        overwrite = 'append'

    from_conn = Connection(from_conn_id)
    to_conn = Connection(to_conn_id)

    print('Grabbing table data...')
    df = from_conn.query_pandadf('SELECT * FROM {0}.{1}'.format(from_schema, from_table))

    print('Upserting table data...')
    df.to_sql(to_table, schema=to_schema, con=to_conn.engine, method='multi', if_exists=overwrite, index=False)
