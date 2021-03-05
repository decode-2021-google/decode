from .db import Connection
from random import sample
import uuid

conn = Connection(user='pomodoro')


class Activity():
    __tablename__ = 'activity'
    
    def __init__(self, _id, category, content_type, query, score=0):
        self.id = _id
        self.category = category
        self.score = score
        self.content_type=content_type
        self.query = query

    def commit(self):
        conn.execute('''
        INSERT INTO public.{tablename} (id, category, query, content_type) 
        VALUES ('{id}', '{category}', '{query}', '{content_type}')
        '''.format(tablename=self.__tablename__, id=self.id, category=self.category, query=self.query ,content_type=self.content_type))


    def serialize(self):
        return self.__dict__


class User():
    __tablename__ = 'user_categories'

    def __init__(self, uid):
        self.id = uid
        self.get_categories()
    

    @staticmethod
    def add_userid(uid):
        conn.execute("INSERT INTO public.user_categories (id, category, efficiency_score) VALUES ('{uid}', 'user', '-1')".format(uid=uid))

    def set_categories(self, categories):
        query = '''
                INSERT INTO public.user_categories 
                (id,category,efficiency_score) VALUES{categories};
                '''.format(categories = ",".join([str((self.id, c, 1)) for c in categories]))
        # print(query)
        conn.execute(query)

    def get_categories(self):
        self.categories = conn.query('''SELECT category, efficiency_score
                                        FROM public.{tablename} WHERE id = '{user_id}'
                                        ORDER BY efficiency_score DESC;
                                        '''.format(tablename=self.__tablename__, user_id=self.id))
        return self.categories

    def get_random_activity(self):
        category, score = sample(self.categories[:2], 1)[0] # making sure we sample from the top 2 categories here.
        a = conn.query('''SELECT *
                        FROM public.{tablename}
                        WHERE category = '{category}'
                        '''.format(tablename=Activity.__tablename__ ,category=category))
        return sample(a, 1)[0]

    def create_activity(self, query, content_type):
        category, score = sample(self.get_categories(), 1)[0]
        _id = str(uuid.uuid1())
        activity = Activity(_id, category, score, content_type=content_type, query = query)
        activity.commit()
        return activity.serialize()


    def update_score(self, activity_id, rating):
        static_modifier = 2  # How much the efficiency score changes
        sql = conn.read_file('sql_scripts/change_rating.sql')
        filled_sql = sql.format(feedback=rating, activity_id=activity_id, user_id=self.id, modifier=static_modifier)
        conn.execute(filled_sql)