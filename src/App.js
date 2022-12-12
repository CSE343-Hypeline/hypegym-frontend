import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import HomePage from "./Components/Home/HomePage";
import Error404 from "./Components/Error404/Error404";

import NavBar from "./Components/Navbar/NavBar";
import Login from "./Components/Login/Login";
import OwnerPage from "./Components/Users/Owner/OwnerPage";
import { useState, useEffect } from "react";
import history from "./history";
import SideBar from "./utils/sidebars/SideBar";
import DashboardPage from "./Components/Pages/Dashboard/DashboardPage";
import GymMemberPage from "./Components/Pages/Gym Member/GymMemberPage";
import Profile from "./Components/Pages/Profile/ProfilePage";
import ProfilePage from "./Components/Pages/Profile/ProfilePage";
import { apiMe } from "./Components/API";
import ErrorwithLogin from "./Components/Error404/ErrorwithLogin";

function App() {

  const [auth, setAuth] = useState(false);
  const location = useLocation();

  useEffect(() => {
    apiMe().then(response => {
      console.log(response);
      if (response.status === 200)
        setAuth(true)
      else
        setAuth(false)
    })
  }, [location]);


  return (
    <div className="App">
      {auth ? (

        <Routes history={history}>
          <Route
            exact
            path="/ownerpage"
            element={<OwnerPage auth={true} />}
          >  </Route>
          <Route
            exact
            path="/dashboard"
            element={<DashboardPage setAuth={true} />}
          ></Route>
          <Route
            exact
            path="/gymmember"
            element={<GymMemberPage setAuth={true} />}
          ></Route>
          <Route
            exact
            path="/profile"
            element={<ProfilePage setAuth={true} />}
          ></Route>
          <Route
            exact
            path="*"
            element={<ErrorwithLogin />}
          ></Route>


        </Routes>

      ) : (

        // <NavBar auth={auth} setAuth={setAuth} />
        <Routes history={history}>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login setAuth={setAuth} />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>

      )}
    </div>
  );
}

export default App;