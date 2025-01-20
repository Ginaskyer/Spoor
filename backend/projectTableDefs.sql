CREATE database spoor;
use spoor;

CREATE TABLE User (
    userID INT AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(50) NOT NULL,
    password VARCHAR(512) NOT NULL
    -- email VARCHAR(100) NOT NULL
);

CREATE TABLE Locations (
    locationID INT AUTO_INCREMENT PRIMARY KEY,
    latitude DECIMAL(10, 7),
    longitude DECIMAL(10, 7),
    locDescription VARCHAR(255)
);

CREATE TABLE City (
    cityID INT AUTO_INCREMENT PRIMARY KEY,
    cityName VARCHAR(50) NOT NULL
);

CREATE TABLE Article(
    articleID INT AUTO_INCREMENT PRIMARY KEY,
    locationID INT NOT NULL,
    userID INT NOT NULL,
    content TEXT,
    FOREIGN KEY (locationID) REFERENCES Locations(locationID),
    FOREIGN KEY (userID) REFERENCES User(userID)
);

CREATE TABLE Visited (
    userID INT NOT NULL,
    cityID INT NOT NULL,
    PRIMARY KEY (userID, CityID),
    FOREIGN KEY (userID) REFERENCES User(userID),
    FOREIGN KEY (cityID) REFERENCES City(cityID)
);


-- sample data

-- 插入用户数据
INSERT INTO User (userName, password) VALUES
('alice', 'password_hash_1'),
('bob', 'password_hash_2'),
('charlie', 'password_hash_3');

-- 插入地点数据
INSERT INTO Locations (latitude, longitude, locDescription) VALUES
(40.712776, -74.005974, 'New York City, Times Square'),
(48.856613, 2.352222, 'Paris, Eiffel Tower'),
(35.689487, 139.691711, 'Tokyo, Shibuya Crossing'),
(51.507351, -0.127758, 'London, Big Ben');

-- 插入城市数据
INSERT INTO City (cityName) VALUES
('New York'),
('Paris'),
('Tokyo'),
('London');

-- 插入文章数据（假设用户对某个地点写了一篇文章）
INSERT INTO Article (locationID, userID, content) VALUES
(1, 1, 'I had an amazing time in Times Square!'),
(2, 2, 'Visiting the Eiffel Tower was a dream come true.'),
(3, 3, 'Shibuya Crossing is the busiest intersection I have ever seen.'),
(4, 1, 'Big Ben is an iconic landmark of London.');

-- 插入用户访问的城市数据
INSERT INTO Visited (userID, cityID) VALUES
(1, 1), -- Alice visited New York
(2, 2), -- Bob visited Paris
(3, 3), -- Charlie visited Tokyo
(1, 4), -- Alice visited London
(2, 1); -- Bob also visited New York
