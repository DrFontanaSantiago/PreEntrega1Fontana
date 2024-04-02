import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-bootstrap";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand to="#home">Área 51 Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/category/torso" as={NavLink}>
            Torso
          </Nav.Link>
          <Nav.Link to="/category/bermudas" as={NavLink}>
            Bermudas
          </Nav.Link>
          <Nav.Link to="/category/accesorios" as={NavLink}>
            Accesorios
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
