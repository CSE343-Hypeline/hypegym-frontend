import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/Navbar/NavBar";
import Login from "./Components/LoginPage/Login";
import OwnerPage from "./Components/OwnerPage";
import { useState, useEffect } from "react";
import { authCheck } from "./Components/API";

function App() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    authCheck(setAuth);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar auth={auth} setAuth={setAuth} />
        <Routes history={History}>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          {console.log(auth)}
          {!auth && (
            <Route path="/login" element={<Login setAuth={setAuth} />}></Route>
          )}
          <Route path="/ownerpage" element={<OwnerPage />}></Route>
          {console.log(auth)}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
