current_users = ['Bob','george1999','cvxcvx','John','rzlaser']
new_users = ['bob','sankiri','rzlaser','plywood','jungle']

new_current_users = current_users.copy()
for cuser in range(len(new_current_users)):
	new_current_users[cuser] = new_current_users[cuser].lower()

for user in new_users:
	if user in new_current_users:
		print("You must enter a different username.")
	else:
		print(f"{user} is aviailable as a username.")