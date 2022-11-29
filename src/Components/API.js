import axios from "axios"
import { useNavigate } from "react-router-dom";

/** 
 *
 * @param {Function} setAuth represents if user login in
 */
export const authCheck = async (setAuth) => {


  const response = await fetch("http://localhost:8080/api/auth", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);

  if (response.status === 200) {
    setAuth(true);
    console.log("Status: 200");
  } else {
    setAuth(false);
  }
};
/**
 * @param {Object} An object containing user credentials
 * @param {Function} setAuth To set state of auth
 */
export async function loginAPI (data) {
  // const navigate = useNavigate();

  const value = await axios.post("http://localhost:8080/login",
  {
   "email": data.email,
   "password": data.password
  })
  .then((response) => {
    
    if (response.status === 200) {
      
    }  
    return response.data.status
  
  })

  // navigate("/ownerPage");

  // const valuse = await fetch("http://localhost:8080/login", {
  //   method: "POST",
  //   body: JSON.stringify(data),
  // }).then(response => response.json)
  //   .catch((error) => console.log(error))

  // console.log(value);
  // if (!response.ok) {
  //   const message = `An error has occured: ${response.status}`;
  //   alert(message);
  //   return false;
  // }
  // else
  //   return true;
  // setAuth(true);
};

/**
 * @param {Function} setAuth To set state of auth
 */
export const logout = async (setAuth) => {
  console.log("Logging Out");
  const response = await fetch("/logout", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200) {
    setAuth(false);
  }
};

/**
 *
 * @param {Function} setUserData Function to set user data state on User Detail component
 */
export const getUserData = async (setUserData) => {
  const data = await fetch("/auth/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

  setUserData({ email: data.email, username: data.username });
};
