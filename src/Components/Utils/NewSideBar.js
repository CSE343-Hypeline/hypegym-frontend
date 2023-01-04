import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { LogoutAPI } from "../API";

function NewSideBar() {
  const [visibleLeft, setVisibleLeft] = useState(false);

  return (
    <div className="SideBar">
      <Sidebar
        style={{ width: "250px" }}
        dismissable={true}
        visible={true}
        modal={false}
      >
        <h3>Left Sidebar</h3>

        <Nav className="me-auto">
          <LinkContainer to="dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
        </Nav>

        <Nav className="me-auto">
          <LinkContainer to="manage-members">
            <Nav.Link>Manage Members</Nav.Link>
          </LinkContainer>
        </Nav>

        <Nav className="me-auto">
          <LinkContainer to="manage-trainers">
            <Nav.Link>Manage Trainers</Nav.Link>
          </LinkContainer>
        </Nav>

        <Nav className="me-auto">
          <LinkContainer to="profile">
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>
        </Nav>

        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link
              onClick={() => {
                LogoutAPI();
              }}
            >
              Logout
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Sidebar>
    </div>
  );
}

export default NewSideBar;
