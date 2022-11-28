import HomePage from "./HomePage";

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
export const loginAPI = async (data, setAuth) => {
  const response = await fetch("http://localhost:8080/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(data);

  console.log(response);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    alert(message);
    return;
  }

  setAuth(true);
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
