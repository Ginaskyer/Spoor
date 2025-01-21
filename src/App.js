// App.js
import React, { useState } from "react";
import LoginPage from "./components/Login.tsx";
import MainPage from "./components/MainPage.tsx";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 登录状态

  // 登录成功回调
  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // 更新登录状态
  };

  return (
    <div>
      {isLoggedIn ? (
        <MainPage /> // 登录成功后显示主页面
      ) : (
        <LoginPage onLoginSuccess={handleLoginSuccess} /> // 登录页面
      )}
    </div>
  );
};

export default App;
