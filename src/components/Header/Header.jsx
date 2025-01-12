import React from "react";
import NavbarStyle from "../../scss/navbar.module.scss";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

import { luxuryHomes } from "../../helpers/data";

function Header() {
  const uniqueRooms = [...new Set(luxuryHomes.map((home) => home.rooms))];
  return (
    <Navbar expand="lg" className={NavbarStyle.navbar}>
      <Container className={NavbarStyle.container}>
        <Navbar.Brand href="#home" className={NavbarStyle.title}>
          Luxury Real Estate
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={NavbarStyle.toggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`me-auto ${NavbarStyle.nav}`}>
            {uniqueRooms.map((room, index) => (
              <Button key={index} className={NavbarStyle.buttons}>
                {room}
              </Button>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
