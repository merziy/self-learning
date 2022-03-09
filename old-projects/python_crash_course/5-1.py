drink = 'matcha'
print("Is drink == 'matcha'? I predict True.")
print(drink == 'matcha')

print("\nIs drink == 'coffee'? I predict False.")
print(drink == 'coffee')

drink = 'Milk'
print("\nIs drink == 'milk'? I predict True.")
print(drink.lower() == 'milk')

drinks = ['matcha', 'coffee', 'milk', 'juice']
if 'coffee' in drinks:
	print("\n'coffee' is your favorite drink.")
if 'milk' and 'water' not in drinks:
	print("\nWe do not have milk and water.")