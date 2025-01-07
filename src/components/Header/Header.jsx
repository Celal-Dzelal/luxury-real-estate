import React from "react";
import NavbarStyle from "../../scss/navbar.module.scss";
import { Container, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" className={NavbarStyle.navbar}>
      <Container className={NavbarStyle.container}>
        <Navbar.Brand href="#home" className={NavbarStyle.title}>
          Luxury Real Estate
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
