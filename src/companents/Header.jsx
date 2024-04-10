
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Headerx() {
  return (
    
    <Container style={{ maxWidth: '70vw' }}>
    <Navbar bg="dark" variant="dark" expand="lg" className="rounded">
    <Container style={{ maxWidth: '70vw' }}>
        <Navbar.Brand href="#">My Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </Container>
  );
}

export default Headerx;