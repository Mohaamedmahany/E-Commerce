import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const totalproduct2 = useSelector((state)=>state.cart.totalproduct)
  return (
    <Navbar  expand="lg" className="  z-1 fixed-top bg-white">
      <Container className=" p-1" >
        <Navbar.Brand as={NavLink} to="/">
          E-COMMERCE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className=" fw-bold" as={NavLink} to="/">
              Home
            </Nav.Link>
           
            <Nav.Link className=" fw-medium" as={NavLink} to="/ProductAll">
              Product
            </Nav.Link>
             <Nav.Link className=" fw-medium" as={NavLink} to="/AboutPages">
              About
            </Nav.Link>
            <Nav.Link className=" fw-medium" as={NavLink} to="/Contact">
             Contact
            </Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <NavLink to="/Login">
              {" "}
              <Button  variant="primary">
                {" "}
                <i class="bi bi-box-arrow-in-right"></i> login
              </Button>{" "}
            </NavLink>
            <NavLink to="/Register" className="ms-2 me-2">
              {" "}
              <Button variant="primary">
                {" "}
                <i class="bi bi-person-plus-fill"></i> Register
              </Button>{" "}
            </NavLink>
            <NavLink to="/Cart">
              {" "}
              <Button  variant="primary">
                {" "}
                <i class="bi bi-cart"></i> cart ({totalproduct2})
              </Button>{" "}
            </NavLink>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
