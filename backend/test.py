from flask import Blueprint, request, jsonify, session
import sys
from utils import get_db_connection



user_id = 1
lat = 0
lng = 0
loc_description = "test"

connection = None
cursor = None

try:
    connection = get_db_connection()
    cursor = connection.cursor()

    # 插入 Location
    insert_location_query = """
        INSERT INTO Locations (latitude, longitude, locDescription)
        VALUES (%s, %s, %s)
    """
    cursor.execute(insert_location_query, (lat, lng, loc_description))
    location_id = cursor.lastrowid  # 获取刚插入的 ID

    # 插入 Visited 记录
    insert_visited_query = """
        INSERT INTO Visited (userID, locationID)
        VALUES (%s, %s)
    """
    cursor.execute(insert_visited_query, (user_id, location_id))

    connection.commit()  # 提交事务

except Exception as e:
    if connection:
        connection.rollback()  # 回滚事务

finally:
    if cursor:
        cursor.close()
    if connection:
        connection.close()



