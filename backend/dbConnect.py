# Use to connect, interact with database from one location
class DataBase:
	def __init__(self, address):
		self.address = address	# Hold address for later connections

	def get(self, user):
		#TODO: Retrieve DB entries, possibly with params or as complete JSON (Firebase), may do filtering here
		pass

	def post(self, user, field):
		#TODO: Update DB information here
		pass

	def connect(self):
		#TODO: Manage connections here
		pass
