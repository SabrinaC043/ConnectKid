import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../style/footerstyle.css";
import { Row, Col } from "react-bootstrap";
const FooterBottom = () => {
  const style = {
    overflow: "hidden",
  };

  return (
    <Navbar
      fixed="bottom"
      bg="dark"
      expand="lg"
      variant="dark"
      style={{ style }}
    >
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      >
        <Nav.Link>Home</Nav.Link>
      </Nav>

      <Navbar.Brand href="#" className="d-flex">
        ConnectKid
      </Navbar.Brand>
    </Navbar>
  );
};

export default FooterBottom;
