// // App.js
// import React, { useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import LoginPage from "./components/Login.tsx";
// import MainPage from "./components/MainPage.tsx";
// import Diary from "./components/Travel_dairy.tsx";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // 登录状态
//   const [userId, setUserId] = useState(null); // 存储登录用户 ID

//   const handleLoginSuccess = (userID) => {
//     setIsLoggedIn(true); // 更新登录状态
//     setUserId(userID); // 记录用户 ID
//     localStorage.setItem("userId", userID); // 可选：存储在 localStorage
//   };

//   return (
//     <div>
//       {isLoggedIn ? (
//         <MainPage userId={userId}/> // 登录成功后显示主页面
//         // <Diary userId={userId}/>
//       ) : (
//         <LoginPage onLoginSuccess={handleLoginSuccess} /> // 登录页面
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import { Button, Divider } from "antd";

import LoginPage from "./components/Login.tsx";
import Diary from "./components/Travel_dairy.tsx";
import MapComponent from "./components/MapComponent.tsx";
import MainPage from "./components/MainPage.tsx"

// import ProtectedRoute from "./Components/Routes/ProtectedRoute.tsx";

import axios from "axios";

const App = () => {
  axios.defaults.withCredentials = true; // Send cookies with every request
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 登录状态
  const [userId, setUserId] = useState(null); // 存储登录用户 ID

  const handleLoginSuccess = (userID) => {
        setIsLoggedIn(true); // 更新登录状态
        setUserId(userID); // 记录用户 ID
        localStorage.setItem("userId", userID); // 可选：存储在 localStorage
      };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />

        <Route path="/MainPage" element={<MainPage />} />

        <Route path="/Diary" element={<Diary/>} />

        
        {/* <Route
          path="/"
          element={
            <div style={{ width: 400, margin: "auto", paddingTop: "50px" }}>
              <h2>Welcome</h2>
              <Button type="primary" block href="/login">
                Login
              </Button>
              <Divider>Or</Divider>
              <Button type="primary" block href="/register">
                Register
              </Button>
            </div>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
