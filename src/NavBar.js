import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";


function NavBar() {

  return (
    <div>
      <Navbar expand="md">
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink exact to="/">home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to="/help">help</NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to="/donate">donate</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;