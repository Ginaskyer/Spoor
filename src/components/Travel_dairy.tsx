import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css"; // 样式文件

const Diary = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { isLoggedIn, userId } = location.state || {}; // 防止 state 为空时报错
    const [diaryEntries, setDiaryEntries] = useState([]);

    useEffect(() => {
        if (userId == null) {
            navigate("/");
            return;
        }

        axios
        .get("http://localhost:5000/api/getMapLoc", { params: { userID: userId } }) // 传递 userID = 1
        .then((response) => {
            const locations = response.data.location;
            setDiaryEntries(locations); // 确保 diary 不是 undefined
        })
        .catch((error) => console.error("Error fetching diary entries:", error));
    }, [navigate, userId]); // ✅ 修正 useEffect 依赖项

    const openMap = (lat, lng) => {
        const url = `https://www.google.com/maps?q=${lat},${lng}`;
        window.open(url, "_blank");
    };

    return (
        <div className="app">
          <header className="navbar">
            <div className="title">
              <h1>
                Spoor<i className="fas fa-compass"></i>
              </h1>
            </div>
            <nav>
              <a>User_id: {userId}</a>
              <span>|</span>
              <a href="#map">
                <i className="fas fa-map-marked-alt"></i> Map
              </a>
              <span>|</span>
              <a href="#Diary">
                <i className="fas fa-book"></i> Travel Diary
              </a>
              <span>|</span>
              <a href="#recommendations">
                <i className="fas fa-clipboard-list"></i> Recommendation
              </a>
            </nav>
          </header>
          
          <main className="mainpart">
            <h2>Travel Diary</h2>
            {diaryEntries.length === 0 ? (
              <p>No diary entries found.</p>
            ) : (
              <div className="diary-list">
                {diaryEntries.map((entry, index) => (
                  <div key={index} className="diary-card">
                    <h3>📍 {entry.description}</h3>
                    <p><strong>Latitude:</strong> {entry.lat}</p>
                    <p><strong>Longitude:</strong> {entry.lng}</p>
                    <button onClick={() => openMap(entry.lat, entry.lng)}>View on Map</button>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
    );
};

export default Diary;

