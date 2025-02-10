import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, notification } from "antd";

const LoginPage = ({handleLoginSuccess}) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 登录状态
  const [userId, setUserId] = useState(null); // 存储登录用户 ID

  const handleLogin = (username, password) => {
    // todo
    axios
    .post('http://localhost:5000/api/Login',
      {
        user: username,
        key: password
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then((response) => {
      const result = response.data.result;
      const userID = response.data.userID;
      if (result) {
        notification.success({
          message: "Login Success",
        });
        setIsLoggedIn(true);
        setUserId(userID);
        // handleLoginSuccess();
        navigate("/MainPage", { 
          state: { isLoggedIn: true, userId: userID } 
        });
        
      } else {
        Swal.fire("Error", "Invalid username or password", "error"); // fail
      }
    })
    
  };
  
  const handleSignUp = (username, password) => {
    axios
      .post("http://localhost:5000/api/SignUp", {
        user: username,
        key: password
      })
      .then((response) => {
        if (response.data.success) {
          Swal.fire("Success", "Account created!", "success");
          setIsSignUp(false); // 回到登录模式
        } else {
          Swal.fire("Error", response.data.message, "error");
        }
      })
      .catch(() => Swal.fire("Error", "Sign-up failed", "error"));
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">{isSignUp ? "Sign Up" : "Login to Spoor"}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const username = e.target.username.value;
            const password = e.target.password.value;
            isSignUp ? handleSignUp(username, password) : handleLogin(username, password);
          }}
          className="login-form"
        >
          <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
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
            <label htmlFor="password" className="form-label">Password</label>
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
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="toggle-text" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? "Already have an account? Login here." : "Don't have an account? Sign up here."}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
