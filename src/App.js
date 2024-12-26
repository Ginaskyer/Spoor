import React from "react";
import MapComponent from "./components/MapComponent";
import "./App.css"; // 样式文件
// import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="title">
          <h1>
            Spoor<i className="fas fa-compass"></i>
          </h1>
        </div>
        <nav>
          <a href="#map">
            <i className="fas fa-map-marked-alt"></i> Map
          </a>
          <span>|</span>
          <a href="#logs">
            <i className="fas fa-book"></i> Travel Diary
          </a>
          <span>|</span>
          <a href="#recommendations">
            <i className="fas fa-clipboard-list"></i> Recommandation
          </a>
        </nav>
      </header>
      <main>
        <section id="map" className="map-section">
          <MapComponent />
        </section>
      </main>
    </div>
  );
}



export default App;
