import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import HomePage from "./Components/Home/Home";
import NavBar from "./Components/Navbar/NavBar";
import Login from "./Components/Login/Login";
import Error from "./Components/Error/Error";
import { useState, useEffect } from "react";
import DashboardAdmin from "./Components/Users/Owner/Dashboard/Dashboard";
import DashboardPT from "./Components/Users/PersonalTrainer/Dashboard/Dashboard";
import DashboardMember from "./Components/Users/Member/Dashboard/Dashboard";
import ManageMembers from "./Components/Users/Owner/ManageMembers/ManageMembers";
import ProfileAdmin from "./Components/Users/Owner/Profile/Profile";
import ProfileMember from "./Components/Users/Member/Profile/Profile";
import ProfilePT from "./Components/Users/PersonalTrainer/Profile/Profile";
import { apiMe } from "./Components/API";
import SideBar from "./Components/Utils/SideBar";

function App() {
  const location = useLocation();
  const [auth, setAuth] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    apiMe().then((response) => {
      if (response.status === 200) {
        setRole(response.data.role);
        console.log(response.data.role);
        setAuth(true);
      } else;
    });
  }, [location]);

  if (!auth) {
    return (
      <>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<Error auth={auth} />} />
        </Routes>
      </>
    );
  } else {
    if (role === "SUPERADMIN") {
      return (
        <div className="main-div">
          <SideBar role={role} />
          <Routes>
            <Route exact path="/dashboard" element={<DashboardAdmin />} />
            <Route exact path="/manage-members" element={<ManageMembers />} />
            <Route exact path="/profile" element={<ProfileAdmin />} />
            <Route exact path="*" element={<Error auth={auth} />} />
          </Routes>
        </div>
      );
    } else if (role === "ADMIN") {
      return (
        <div className="main-div">
          <SideBar role={role} />
          <Routes>
            <Route exact path="/dashboard" element={<DashboardAdmin />} />
            <Route exact path="/manage-members" element={<ManageMembers />} />
            <Route exact path="/profile" element={<ProfileAdmin />} />
            <Route exact path="*" element={<Error auth={auth} />} />
          </Routes>
        </div>
      );
    } else if (role === "MEMBER") {
      return (
        <div className="main-div">
          <SideBar role={role} />
          <Routes>
            <Route exact path="/dashboard" element={<DashboardMember />} />
            <Route exact path="/profile" element={<ProfileMember />} />
            <Route exact path="*" element={<Error auth={auth} />} />
          </Routes>
        </div>
      );
    } else {
      return (
        <div className="main-div">
          <SideBar role={role} />
          <Routes>
            <Route exact path="/dashboard" element={<DashboardPT />} />
            <Route exact path="/profile" element={<ProfilePT />} />
            <Route exact path="*" element={<Error auth={auth} />} />
          </Routes>
        </div>
      );
    }
  }
}

export default App;
