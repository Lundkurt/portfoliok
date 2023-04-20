import React from "react";
import { Nav } from "react-bootstrap";

function Header() {
  return (
    <header className="d-flex justify-content-center align-items-center">
      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/projects" eventKey="link-1">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact" eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
}

export default Header;
