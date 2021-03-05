import psycopg2
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
        self.engine = create_engine('postgresql+pg8000://{0}:{1}@{2}:{3}/{4}?unix_socket=/cloudsql/pomodoro'.format(self.user, self.password, self.host, self.port, self.database))

    def query(self, query):
        return self.engine.execute(query).fetchall()

    def read_file(self, file):
        return open(file, 'r').read()

    def query_file(self, file):
        query = self.read_file(file)

        return self.query(query)

    def execute(self, query, commit=True):
        self.engine.execute(query)

        #if commit:
        #    self.conn.commit()
