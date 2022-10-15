import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      {/* <Container fluid> */}
        <Navbar.Brand href="#">ConnectKid</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          > 
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
            <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/events">
            <Nav.Link href="#action2">Events</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/inspiration">
            <Nav.Link href="#">Weekly Inspiration</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className='d-flex'>
            <LinkContainer to="/signup">
              <Nav.Link>Sign Up/In</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default NavScrollExample;