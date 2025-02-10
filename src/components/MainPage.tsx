import React, { useEffect } from "react";
import MapComponent from "./MapComponent.tsx";
import "./App.css"; // 样式文件
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Diary from "./Travel_dairy.tsx";

const MainPage = () => {
  const location = useLocation();
  const { isLoggedIn, userId } = location.state || {}; // 防止 state 为空时报错
  const navigate = useNavigate();

  useEffect(() => {
    if (userId == null){
      navigate("/");
    }
  }, [navigate, userId]);

  const openTravelDiary = () => {
    navigate("/Diary", { 
      state: { isLoggedIn: true, userId: userId } 
    });
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
          {/* <button onClick={openTravelDiary} className="nav-link">
            <i className="fas fa-book"></i> Travel Diary
          </button> */}
          <a onClick={(e) => { 
                e.preventDefault(); 
                openTravelDiary(); 
              }}>
            <i className="fas fa-book"></i> Travel Diary
          </a>
          <span>|</span>
          <a href="#recommendations">
            <i className="fas fa-clipboard-list"></i> Recommendation
          </a>
        </nav>
      </header>
      <main className="mainpart">
        <div className="content-container">
          <section id="map" className="map-container">
            <MapComponent userId={userId} />
          </section>
          <div className="divider"></div>
          <section id="images" className="image-section">
            <div className="image-group">
              <h2>Personal Diary</h2>
              <div className="image-row">
                <img
                  src="/Southeast_Univeristy.jpg"
                  alt="Nature 1"
                  className="image-item"
                />
                <img src="/NYC.jpg" alt="Nature 2" className="image-item" />
              </div>
            </div>
            <div className="image-group">
              <h2>Next Destination</h2>
              <div className="image-row">
                <img src="/Paris.jpg" alt="Nature 1" className="image-item" />
                <img src="/LA.webp" alt="Nature 2" className="image-item" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
