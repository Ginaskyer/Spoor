// App.js
import React, { useState } from "react";
import LoginPage from "./components/Login.tsx";
import MainPage from "./components/MainPage.tsx";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 登录状态
  const [userId, setUserId] = useState(null); // 存储登录用户 ID

  // 登录成功回调
  const handleLoginSuccess = (userID) => {
    setIsLoggedIn(true); // 更新登录状态
    setUserId(userID); // 记录用户 ID
    localStorage.setItem("userId", userID); // 可选：存储在 localStorage
  };

  return (
    <div>
      {isLoggedIn ? (
        <MainPage userId={userId}/> // 登录成功后显示主页面
      ) : (
        <LoginPage onLoginSuccess={handleLoginSuccess} /> // 登录页面
      )}
    </div>
  );
};

export default App;
