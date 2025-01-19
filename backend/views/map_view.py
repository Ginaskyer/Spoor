from flask import Blueprint, request, jsonify, session
from utils import get_db_connection, process_string_value

map_bp = Blueprint('map_bp', __name__)

def get_location():
    path = 

@map_bp.route('/getMapLoc', methods=['GET'])
def load_mapLoc():
    points = get_location()
    result = []
    for point in points:
        result.append({"lat": point[0], "lng": point[1]})
    return jsonify({'location': result})

@map_bp.route('/getMapLoc', methods=['POST'])
def get_mapLoc():
    data = request.get_json()
    lat = data['lat']
    lng = data['lng']
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute("INSERT INTO Person (userName, password, fname, lname, email) VALUES (%s, %s)",
                       (lat, lng))
    connection.commit()
    return jsonify({"message": "destination is adding successully"}), 201