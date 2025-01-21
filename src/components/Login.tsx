import React, { useState } from "react";
import Swal from "sweetalert2";
import "./LoginPage.css"; // 引入外部样式文件

const LoginPage = ({ onLoginSuccess }) => {
  const handleLogin = (username, password) => {
    // todo
    if (username === "Skyer_L-AU2024@outlook.com" && password === "1qaz2wsx") {
      onLoginSuccess(); 
    } else {
      Swal.fire("Error", "Invalid username or password", "error"); // fail
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Login to Spoor</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const username = e.target.username.value;
            const password = e.target.password.value;
            handleLogin(username, password);
          }}
          className="login-form"
        >
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="form-input"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="form-input"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
