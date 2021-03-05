from db import Connection
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
        '''.format(tablename=self.__tablename__, id=self.id, category=self.category, query='test' ,content_type=self.content_type))
        print(conn.query('''SELECT * from public.{tablename}'''
                        .format(tablename=self.__tablename__)))

    def serialize(self):
        return self.__dict__


class User():
    __tablename__ = 'user'

    def __init__(self, uid):
       self.id = uid
    
    def get_categories(self):
        self.categories = conn.query('''SELECT category, efficiency_score
                                        FROM public.{tablename} WHERE id = \'{user_id}\'
                                        ORDER BY efficiency_score ASC;'''
                                        .format(tablename=self.__tablename__, user_id=self.id))
        return self.categories

    def get_activity(self, preference):
        a = conn.query('''SELECT *
                        FROM public.{tablename}
                        WHERE category = '{category}'
                        '''.format(tablename=Activity.__tablename__ ,category=preference))


    def create_activity(self, preference, query):
        act = sample(self.get_categories(), 1)[0]
        _id = str(uuid.uuid1())
        activity = Activity(_id, category = act[0], score=act[1], content_type='youtube', query = query)
        activity.commit()
        return activity.serialize()

if __name__ == "__main__":
    u = User('0')
    print(u.get_categories())
    print(u.get_activity('0'))
    print(u.create_activity('0'))
    