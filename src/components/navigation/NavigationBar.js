import { NavLink } from "react-router";
import logo from "../../assets/mm_logo.png";
// import "./NavigationBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function Navigation() {
  return (
    <Navbar expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} height="100vh" alt="" className="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/" end>
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/users" end>
                Users
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/signup">Signup</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/newInventory">Add Inventory</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
