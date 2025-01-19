# Spoor
An interesting webpage to record our travel footprint, using web development and SQL

## Install

## Demo
npm start

## SQL
cd "C:\Program Files\MySQL\MySQL Server 8.0\bin"
mysqld

mysql -u spoor -p 
CREATE USER 'spoor'@'localhost' IDENTIFIED BY '';

CREATE DATABASE travel_db;
USE travel_db;

CREATE TABLE locations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    lat DOUBLE,
    lng DOUBLE
);
