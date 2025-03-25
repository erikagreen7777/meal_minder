import { NavLink } from "react-router";
import logo from "../../assets/mm_logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function Navigation() {
  return (
    <Navbar expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} height="100px" alt="" className="" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="justify-content-end"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav variant="underline" className="ms-auto my-2 my-lg-0">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/signup">
                Signup
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={NavLink} to="/new-inventory">
                Add Inventory
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={NavLink} to="/users" end>
                Users
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
