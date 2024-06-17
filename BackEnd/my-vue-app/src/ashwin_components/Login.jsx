import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login({ setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (username === "" || password === "") {
      alert("Username or Password cannot be empty!!!");
      return;
    }

    try {
      const response = await axios.get("http://localhost:5000/admin");
      const users = response.data;
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user && user.isAdmin) {
        setAuth(true);
        navigate("/");
        alert("Login successful.");
      } else {
        throw new Error("Invalid credentials or not an admin");
      }
    } catch (error) {
      alert("Invalid credentials.");
    }
  };

  useEffect(() => {
    document.getElementById("username").focus();
  }, []);

  return (
    <div className="login-container">
      <div className="form-control">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div id="checkBox">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
        </div>
      </div>

      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
