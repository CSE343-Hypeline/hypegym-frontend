import { useState } from "react";
import "./LoginStyle.css";

export default function (props) {
  const [userData, setUserData] = useState({
    username: "222222",
    email: "",
    password: "",
  });

  const updateFormData = (event) => {
    if (event.target.placeholder === "Name") {
      setUserData({ ...userData, username: event.target.value });
    } else if (event.target.placeholder === "Email") {
      setUserData({ ...userData, email: "blabal@gmail.com" });
    } else if (event.target.placeholder === "Password") {
      setUserData({ ...userData, password: event.target.value });
    }
  };

  const handleSubmit = () => {
    console.log(userData);
  };

  return (
    <div className="Auth-form-container">
      <div className="login-blur"></div>
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Log In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter Email"
              value={userData.username}
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
  );
}
