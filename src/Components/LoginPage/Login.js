import { useState } from "react";
import { loginAPI } from "../API";
import "./LoginStyle.css";

export default function ({ setAuth }) {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const updateFormData = (event) => {
    // if (event.target.placeholder === "username") {
    //   setUserData({ ...userData, username: event.target.value });
    // }
    if (event.target.type === "email") {
      setUserData({ ...userData, email: event.target.value });
    } else if (event.target.type === "password") {
      setUserData({ ...userData, password: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginAPI(userData, setAuth);
    console.log(userData);
  };

  return (
    <div>
      <div className="Auth-form-container">
        <div className="login-blur"></div>
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Log In</h3>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter Email"
                value={userData.email}
                onChange={updateFormData}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={userData.password}
                onChange={updateFormData}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button className="button-75">
                <span className="text">SUBMIT</span>
              </button>
            </div>
            <p className="forgotPassword">
              <a href="#"> Forgot password?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
