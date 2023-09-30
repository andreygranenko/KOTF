# import mysql.connector

# mydb = mysql.connector.connect (
#     host="localhost",
#     user="root",
#     password='00000',
#     database="clients"
#     )

# mycursor = mydb.cursor()
# mycursor.execute("SELECT * FROM clients")
# myresult = mycursor.fetchall()
# for x in myresult:
#     print(x)

import mysql.connector

#establishing the connection
conn = mysql.connector.connect(
   user='root', password='00000', host='127.0.0.1', database='clientdb')

#Creating a cursor object using the cursor() method
cursor = conn.cursor()

#Preparing the query to update the records
sql = '''INSERT INTO clients (name, surename, email, password)
VALUES ("Mark", "Deny", "cat@gmail.com", "209876"); '''
try:
   # Execute the SQL command
   cursor.execute(sql)
   
   # Commit your changes in the database
   conn.commit()
except:
   # Rollback in case there is any error
   conn.rollback()
   
#Retrieving data
sql = '''SELECT * from clients'''

#Executing the query
cursor.execute(sql)

#Displaying the result
print(cursor.fetchall())

#Closing the connection
conn.close()