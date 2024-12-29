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
      <main className="mainpart">
        <div className="content-container">
          <section id="map" className="map-container">
            <MapComponent />
          </section>
          <div className="divider"></div>
          {/* New Image Section */}
          <section id="images" className="image-section">
            <div className="image-group">
              <h2>Personal Diary</h2>
              <div className="image-row">
                <img
                  src="/Southeast_Univeristy.jpg"
                  alt="Nature 1"
                  className="image-item"
                />
                <img
                  src="/NYC.jpg"
                  alt="Nature 2"
                  className="image-item"
                />
              </div>
            </div>
            <div className="image-group">
              <h2>Next Destination</h2>
              <div className="image-row">
                <img
                  src="/Paris.jpg"
                  alt="Nature 1"
                  className="image-item"
                />
                <img
                  src="/LA.webp"
                  alt="Nature 2"
                  className="image-item"
                />
              </div>
            </div>
          </section>
          
        </div>
      </main>
    </div>
  );
}



export default App;
