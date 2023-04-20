import React from "react";
import { Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="d-flex justify-content-center align-items-center">
      <Nav className="justify-content-center" activeKey={location.pathname}>
        <Nav.Item>
          <Nav.Link href="/" eventKey="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/projects" eventKey="/projects" active={location.pathname === "/projects"}>
            Projects
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact" eventKey="/contact" active={location.pathname === "/contact"}>
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
}

export default Header;