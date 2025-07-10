import { Navbar, Nav, Container } from 'react-bootstrap'
import './header-sytyle.css'
import logo from './img-header/logo.png'

export function Header(){

  return (
    <Navbar fixed="top" expand="lg" bg="light" className="py-3 shadow-sm navbar-bg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Cambur Pintón"
            className="img-fluid"
            style={{ height: '40px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#nosotros">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}