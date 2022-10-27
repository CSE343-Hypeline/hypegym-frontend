import React from "react";
import "./LoginStyle.css";

export default function (props) {
  return (

    <div className="Auth-form-container">
      <div className="login-blur"></div>
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Log In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
<<<<<<< HEAD
            <button class="button-75" role="button"><span class="text">SUBMIT</span></button>
          </div>
          <p className="forgotPassword" >
            <a href="#"  > Forgot password?</a>
=======
            <button class="button-75" role="button">
              <span class="text">SUBMİT</span>
            </button>
          </div>
          <p className="forgotPassword">
            <a href="#"> Forgot password?</a>
>>>>>>> d05f3efaa88144187d678fcec8a15f4712b9f85e
          </p>
        </div>
      </form>
    </div>
<<<<<<< HEAD

  )
}
=======
  );
}
>>>>>>> d05f3efaa88144187d678fcec8a15f4712b9f85e
