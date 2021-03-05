# Features that our front-end friends need

def generateActivity(user, preference=0):
	#TODO: Returns an activity based on uid
	# Preference (use a numbered system?) indicates if a user would like a certain category, 0=any
	pass

def feedbackActivity(user, activityId, feedback):
	#TODO: Retrieve score from db, update score, update db
	pass

def retrieveActivity(user):
	#TODO: In case of an error, we may want to be able to retrieve the activityId a user was in
	pass

def feedbackProductivity(user, feedback):
	#TODO: Metrics based on how user is doing in the session
	pass
