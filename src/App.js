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
import ProfileAdmin from "./Components/Users/Owner/Profile/Profile";
import ProfileMember from "./Components/Users/Member/Profile/Profile";
import ProfilePT from "./Components/Users/PersonalTrainer/Profile/Profile";
import { apiMe } from "./Components/API";
import SideBar from "./Components/Utils/SideBar";
import NewSideBar from "./Components/Utils/NewSideBar";
import { ProgressSpinner } from "primereact/progressspinner";

import ManageMembers from "./Components/Users/Owner/ManageMembers/ManageMembers";
import ManageTrainers from "./Components/Users/Owner/ManageTrainers/ManageTrainers";

function App() {
  const location = useLocation();
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const [role, setRole] = useState("");

  useEffect(() => {
    getToken();
  }, [location]);

  const getToken = async () => {
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

  if (loading) {
    return <ProgressSpinner />;
  } else if (!auth) {
    console.log(auth);
    return (
      <div className="not-auth">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<Error auth={auth} />} />
        </Routes>
      </div>
    );
  } else {
    if (role === "SUPERADMIN") {
      return (
        <div className="main-div">
          {/* <SideBar role={role} /> */}

          <NewSideBar />

          <Routes>
            <Route exact path="/dashboard" element={<DashboardAdmin />} />
            <Route path="/manage-members" element={<ManageMembers />} />
            <Route path="/manage-trainers" element={<ManageTrainers />} />
            <Route path="/profile" element={<ProfileAdmin />} />
            <Route path="*" element={<Error auth={auth} />} />
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
            <Route path="/manage-trainers" element={<ManageTrainers />} />
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
