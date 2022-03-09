usernames = ['user1', 'user2', 'admin', 'user3']

if usernames:
	for user in usernames:
		if user == 'admin':
			print("Hello admin, would you like to see a status report?")
		else:
			print(f"Hello {user}, thank you for logging in again")
else:
	print("No users in list.")