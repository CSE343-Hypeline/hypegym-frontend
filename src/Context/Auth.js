import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState("false");

  const [values] = {
    auth,
    setAuth,
  };

  return <AuthContext.Provider value={values}></AuthContext.Provider>;
};

export default AuthContext;
