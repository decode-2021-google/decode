import psycopg2
import sqlalchemy


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
        self.engine = sqlalchemy.create_engine(
            # Equivalent URL:
            # postgres+pg8000://<db_user>:<db_pass>@/<db_name>
            #                         ?unix_sock=<socket_path>/<cloud_sql_instance_name>/.s.PGSQL.5432
            sqlalchemy.engine.url.URL(
                drivername="postgresql+pg8000",
                username=self.user,  # e.g. "my-database-user"
                password=self.password,  # e.g. "my-database-password"
                database=self.database,  # e.g. "my-database-name"
                query={
                    "unix_sock": "{}/{}/.s.PGSQL.5432".format(
                        "/cloudsql",  
                        "decode-hackathon:us-central1:pomodoro")  # i.e "<PROJECT-NAME>:<INSTANCE-REGION>:<INSTANCE-NAME>"
                }
            )
        )

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
