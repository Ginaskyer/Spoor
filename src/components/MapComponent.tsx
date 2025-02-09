import React, { useEffect } from "react";
import L from "leaflet";
import axios from "axios";
import Swal from "sweetalert2";
// import config from "../config"; // Import the config file

const MapComponent = ({userId}) => {
  useEffect(() => {
    const map = L.map("map").setView([0, 0], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // 1. 获取用户1访问过的地点，并标注到地图上
    axios
      .get("http://localhost:5000/api/getMapLoc", { params: { userID: userId } }) // 传递 userID = 1
      .then((response) => {
        const locations = response.data.location;

        locations.forEach((loc) => {
          L.marker([loc.lat, loc.lng])
            .addTo(map)
            .bindPopup(`${loc.description}`);
        });

        // 如果有数据，则将视图设置到第一个标记位置
        if (locations.length > 0) {
          map.setView([locations[0].lat, locations[0].lng], 10);
        }
      })
      .catch((error) => console.error("Error fetching visited locations:", error));
    
    map.on("click", async (e) => {
      const { lat, lng } = e.latlng;
      // const description = prompt("Enter description:");
      const { value: description } = await Swal.fire({
            title: "Add Location",
            input: "text",
            inputLabel: "Enter a description:",
            inputPlaceholder: "Describe this location...",
            showCancelButton: true,
            confirmButtonText: "Save",
            cancelButtonText: "Cancel",
          });

      if (description) {
        axios.post("http://localhost:5000/api/addLocation", 
          {
            user_id: 1,
            loc_description: description,
            lat: lat,
            lng: lng
          },
          {
            headers: { "Content-Type": "application/json" }
          }
        )
        .then((response) => {
          L.marker([lat, lng])
            .addTo(map)
            .bindPopup(`${description}`)
            .openPopup();
        })
        .catch((error) => console.error("Error saving location:", error));
      }
    });

    return () => {
      map.off("click");
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: "600px", width: "100%" }}></div>;
};

export default MapComponent;
