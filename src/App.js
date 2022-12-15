import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import HomePage from "./Components/Home/Home";
import NavBar from "./Components/Navbar/NavBar";
import Login from "./Components/Login/Login";
import { useState, useEffect } from "react";
import history from "./history";
import DashboardPage from "./Components//Users/Owner/Dashboard/DashboardPage";
import GymMemberPage from "./Components/Users/Owner/ManageMembers/GymMemberPage";
import ProfilePage from "./Components/Users/Owner/Profile/Profile";
import { apiMe } from "./Components/API";
import Error from "./Components/Error/Error";

function App() {
  const location = useLocation();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    apiMe().then((response) => {
      console.log(response.status);
      if (response.status === 200) setAuth(true);
      else;
    });
  }, [location]);

  return (
    <div className="App">
      {console.log(auth)}
      {auth ? (
        <Routes history={history}>
          <Route exact path="/dashboard" element={<DashboardPage />} />
          <Route exact path="/gymmember" element={<GymMemberPage />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="*" element={<Error auth={auth} />} />
        </Routes>
      ) : (
        <>
          <NavBar />
          <Routes history={history}>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<Error auth={auth} />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
