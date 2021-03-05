from db import Connection
from random import sample
import uuid

conn = Connection(user='pomodoro')

class Activity():
    __tablename__ = 'activity'
    
    def __init__(self, _id, category, content_type, score=0):
        self.id = _id
        self.category = category
        self.score = score
        self.content_type=content_type

    def commit(self):
        if 'query' not in self.__dict__:
            raise ValueError(f"Query string for {self.__repr__} is not set")
        conn.execute('''
        INSERT INTO public.{tablename} (id, category, query, content_type) 
        VALUES ('{id}', '{category}', '{query}', '{content_type}')
        '''.format(tablename=self.__tablename__, id=self.id, category=self.category, query='test' ,content_type=self.content_type))
        print(conn.query('''SELECT * from public.{tablename}'''
                        .format(tablename=self.__tablename__)))

    def serialize(self):
        return self.__dict__
    def get_query(self):
        return self.query


class User():
    __tablename__ = 'user'

    def __init__(self, uid):
       self.id = uid
    
    def get_categories(self):
        self.categories = conn.query('''SELECT category, efficiency_score
                                        FROM public.{tablename} WHERE id = \'{user_id}\''''
                                        .format(tablename=self.__tablename__, user_id=self.id))
        return self.categories

    def get_activity(self, preference):
        a = conn.query('''SELECT *
                        FROM public.{tablename}
                        WHERE category = '{category}'
                        '''.format(tablename=Activity.__tablename__ ,category=preference))


    def create_activity(self, preference):
        act = sample(self.get_categories(), 1)[0]
        _id = uuid.uuid1()
        activity = Activity(_id, category = act[0], score=act[1], content_type='youtube')
        activity.query = 'https://test123.com'
        # Set the query url, and figure out the content type before committing
        activity.commit()
        return activity.serialize()

if __name__ == "__main__":
    u = User('0')
    print(u.get_categories())
    print(u.get_activity('0'))
    print(u.create_activity('0'))
    