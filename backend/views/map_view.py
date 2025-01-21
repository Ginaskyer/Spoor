from flask import Blueprint, request, jsonify, session
import sys
from utils import get_db_connection

map_bp = Blueprint('map_bp', __name__)

@map_bp.route('/getCity', methods=['GET'])
def get_location():
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT cityName FROM City")
    location = cursor.fetchall()
    cursor.close()
    connection.close()
    print(location)
    return location

@map_bp.route('/getMapLoc', methods=['GET'])
def load_visitedLoc():
    connection = get_db_connection()
    cursor = connection.cursor()

    user_id = request.args.get('userID')  # 获取用户 ID

    if not user_id:  # 检查 user_id 是否存在
        return jsonify({"error": "Missing userID"}), 400

    try:
        query = """
        SELECT Locations.latitude, Locations.longitude, Locations.locDescription 
        FROM Locations
        JOIN Visited ON Locations.locationID = Visited.locationID
        WHERE Visited.userID = %s
        """
        cursor.execute(query, (user_id,))
        locations = cursor.fetchall()

        # 格式化 JSON 响应
        result = [{"lat": float(loc[0]), "lng": float(loc[1]), "description": loc[2]} for loc in locations]

        return jsonify({'location': result})

    except Exception as e:
        print(f"Database query error: {e}")
        return jsonify({"error": "Database error"}), 500

    finally:
        cursor.close()
        connection.close()

@map_bp.route('/addLocation', methods=['POST'])
def get_mapLoc():

    data = request.get_json()
    user_id = data.get('user_id')
    lat = data.get('lat')
    lng = data.get('lng')
    loc_description = data.get('loc_description')

    connection = get_db_connection()
    cursor = connection.cursor()

    try:
        insert_location_query = """
            INSERT INTO Locations (latitude, longitude, locDescription)
            VALUES (%s, %s, %s)
        """
        cursor.execute(insert_location_query, (lat, lng, loc_description))

        location_id = cursor.lastrowid

        insert_visited_query = """
            INSERT INTO Visited (userID, locationID)
            VALUES (%s, %s)
        """
        cursor.execute(insert_visited_query, (user_id, location_id))

        connection.commit()
        print(f"Inserted location ID {location_id} and linked it to user ID {user_id}")
        return jsonify({"message": "destination is adding successully"}), 201

    except Exception as e:
        connection.rollback()
        print(f"Error: {e}")

    finally:
        cursor.close()
        connection.close()

    return jsonify({"message": "error"}), 500

@map_bp.route('/test', methods=['GET'])
def test():
     return "Welcome to the protected resource, coolcoolLiu!"

