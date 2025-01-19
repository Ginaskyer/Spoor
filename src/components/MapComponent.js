import React, { useEffect } from "react";
import L from "leaflet";
import axios from "axios";

const MapComponent = () => {
  useEffect(() => {
    // 初始化地图
    const map = L.map("map").setView([0, 0], 2);

    // 添加瓦片层
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // 1. 监听地图点击事件，添加标记并保存到后端
    map.on("click", (e) => {
      const { lat, lng } = e.latlng;
      const name = prompt("Enter location name:");
      const description = prompt("Enter description:");

      if (name && description) {
        axios
          .post("http://localhost:5000/api/locations", {
            name,
            description,
            lat,
            lng,
          })
          .then((response) => {
            L.marker([lat, lng])
              .addTo(map)
              .bindPopup(`${response.data.name}<br>${response.data.description}`)
              .openPopup();
          })
          .catch((error) => console.error("Error saving location:", error));
      }
    });

    // 2. 组件销毁时，清理事件监听
    return () => {
      map.off("click");
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: "600px", width: "100%" }}></div>;
};

export default MapComponent;
