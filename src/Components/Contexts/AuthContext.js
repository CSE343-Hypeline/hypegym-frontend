import { createContext, useContext, useState } from "react";
import { apiMe } from "../API";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState();
  const [gymId, setGymId] = useState();
  const [role, setRole] = useState();
  const [loading, setLoading] = useState(false);

  const getToken = async () => {
    setLoading(true);
    const response = await apiMe()
      .then((response) => {
        if (response.status === 200) {
          setRole(response.data.role);
          setAuth(true);
          setLoading(false);
        }
      })
      .catch((err) => {
        setAuth(false);
        setLoading(false);
      });
  };

  return (
    <>
      <AuthContext.Provider
        value={{ auth, setAuth, gymId, setGymId, getToken, role }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContext;