import React, { useState } from 'react'
import Loginform from './Loginform';
function Login() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const adminUSer = {
    email: "admin@admin.com",
    password: "admin123"
  }
  const Login = details => {
    console.log(details);

    if (details.email == adminUSer.email && details.password == adminUSer.password) {
      console.log("logged in")
      setUser({
        name: details.name,
        email: details.email
      });
    }
    else {
      console.log("Details do not match")
      setError("Details do not match")
    }

  }
  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
  }

  return (

    <div className="Login" >
      {(user.email != "") ? (
        <div className="welcome">
          <h2> welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <Loginform Login={Login} error={error} />
      )}

    </div>

  );
}



export default Login
