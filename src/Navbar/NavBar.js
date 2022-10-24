import React from "react";

import logo from "../assets/img/logo.svg";
import { Navbar, Container, Nav} from "react-bootstrap";
import { NavLink} from "react-router-dom";

import { useState, useEffect } from "react";


function NavBar() {
  const [activateLink, setActivateLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActivateLink(value);
  };
//navbar link cssine bak
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        
        
        <Navbar.Brand href="#home">
          <img src={logo} alt={"Logo"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"> </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink 
              to="home"
              className={
                activateLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              className={
                activateLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              About us
            </NavLink>
            <NavLink
              to = "contact"
              className={
                activateLink === "Contact"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Contact")}
            >
              Contact
            </NavLink>
          </Nav>
          <span className="navbar-text">
            <button className="vvd" onClick={() => console.log("connect")}>
              {" "}
              <span>Become member</span>{" "}
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
