require 'dbi'

db = DBI.connect('DBI:Mysql:db_name', 'username', 'password')

db.do("INSERT INTO people (name, age) VALUES (?, ?)", name, age)

query = db.prepare('SELECT * FROM people')
query.execute

while row = query.fetch do
  puts row.inspect
end

query.finish

db.select_all('SELECT  * FROM people') do |row|
  puts row.inspect
end

db.disconnect
