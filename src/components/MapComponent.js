import React, { useEffect } from "react";
import L from "leaflet";

const MapComponent = () => {
  useEffect(() => {
    // 初始化地图
    const map = L.map("map").setView([0, 0], 2); // 默认视图

    // 添加瓦片层
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // 点击地图，添加标记
    map.on("click", (e) => {
      const { lat, lng } = e.latlng;
      L.marker([lat, lng])
        .addTo(map)
        .bindPopup(`You clicked at ${lat.toFixed(2)}, ${lng.toFixed(2)}`)
        .openPopup();
    });

    // 清理
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{ height: "600px", width: "100%", margin: "20px auto" }}
    ></div>
  );
};

export default MapComponent;
