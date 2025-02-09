from flask import Blueprint, request, jsonify, session
import sys
from utils import get_db_connection

login_bp = Blueprint('login_bp', __name__)

@login_bp.route('/Login', methods=['POST'])
def check_user():
    data = request.get_json()
    username = data.get('user')
    input_pass = data.get('key')

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
        cursor.close()
        connection.close()
        # print(userID)
        return jsonify({'result': result, 'userID': userID})
    else:
        result = False
        return jsonify({"error": "Missing userID"}), 400
    