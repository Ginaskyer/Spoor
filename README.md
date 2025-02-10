# 🌍 Spoor
An interactive webpage to record and visualize travel footprints using modern web development and SQL.

## Function
Spoor is a travel journal application that enables users to document their journeys with an interactive map and a structured database. The key functionalities include:
- **User Authentication:**  
  - Users can sign up and log in securely.  
  - Each user has a unique account to store personal travel data.  
- **Interactive Map Integration:**  
  - Displays all visited locations on a map using **Leaflet.js**.  
  - Users can click on any location to add a **new travel destination**.  
- **Travel Log Management:**  
  - Users can add detailed descriptions for each location, including city name, latitude, longitude, and personal notes.  
  - Travel records are stored in a **MySQL database** for long-term access.  
- **Data Persistence & Retrieval:**  
  - The backend, built with **Flask**, fetches and updates user-specific travel data dynamically.  
  - Users can view, modify, or delete recorded travel logs.  
- **Future Enhancements (Planned Features):**  
  - **Social Sharing**: Enable users to share their travel logs with friends.  
  - **Privacy & Security**: Implement better authentication and encryption to protect user data.  

## Preview
<p align="center">
  <img src="public/Login.png" width="300">
  <img src="public/Mainpage.png" width="300">
  <img src="public/Travel%20Diary.png" width="300">
</p>

## Highlight
- **Frontend:** Built with **React** and **Leaflet.js** to provide an interactive map interface.
- **Backend:** Developed using **Flask (Python)** to handle API requests and database operations.
- **Database:** Uses **MySQL** to store user data, travel logs, and geolocation information.
- **Authentication:** Implements user login and registration with secure password storage.
- **Map Features:** Users can **add, view, and manage travel destinations** on an interactive map.
- **Data Persistence:** Travel history and logs are stored and retrieved from a structured MySQL database.
- **Deployment:** Local development uses **MAMP** for MySQL database management.

## Install
### 1. Install Dependencies
```sh
conda create -n spoor python=3.9
conda activate spoor
pip install -r requirements.txt
```

### 2. Setup Database
This project uses MAMP as an interactive GUI for the database.
- Download and install MAMP.
- Open the MAMP server interface to start MySQL.
- Load the database schema (see the next section).

## Demo
### 1. Run the Frontend and Backend
```sh
# Start the frontend:
npm start

# Run the backend:
cd ./backend
python app.py
```

### 2. Create the database
To quickly set up the database, use the provided projectTableDefs.sql script:
- Copy the SQL commands manually, or
- Upload ./backend/projectTableDefs.sql into the MAMP server GUI to initialize the spoor database.

### 3. Usages
- Login Page: Users can sign up or log in with an existing account.
- Main Page: Displays past destinations on an interactive map. Users can add new destinations and attach travel logs.
- Travel Diary Page: Lists visited locations, including city name, latitude, longitude, and descriptions.

## Todo
- Sharing Feature: Allow users to share their travel logs with friends.
- Security and Privacy Enhancements: Improve authentication and data protection measures.
- Responsive Design: Optimize the UI for different screen sizes.
- Performance Optimization: Enhance API response time and database efficiency.




