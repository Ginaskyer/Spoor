from flask import Blueprint, request, jsonify, session
import sys
from utils import get_db_connection

username = 'alice'
input_pass = 'password_hash_1'

connection = get_db_connection()
cursor = connection.cursor()

query = "SELECT password FROM User WHERE userName = %s"
cursor.execute(query, (username,))
correct_password = cursor.fetchone()

if correct_password[0] == input_pass:
    result = True
    query = "SELECT userID FROM User WHERE userName = %s"
    cursor.execute(query, (username,))
    userID = cursor.fetchone()
    userID = userID[0]
else:
    result = False

cursor.close()
connection.close()

print("test", userID)


