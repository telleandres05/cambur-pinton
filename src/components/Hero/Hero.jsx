import { Container, Row, Col, Button } from 'react-bootstrap'
import './hero-style.css'
// import heroBg from './assets/hero-bg.jpg' // fondo tropical suave
// import productImg from './assets/product.png' // imagen lateral opcional

export function Hero() {
  return (
    <div
      className="hero-section d-flex align-items-center hero-bg"
      style={{
        backgroundImage: ('/src/assets/navbg.png') ,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // height: '90vh',
        color: '#003333',
        fontFamily: 'Magic Retro'
      }}
    >
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={6}>
            <h1 className="display-4 fw-bold">¡Explora nuestro sabor, libre de gluten!</h1>
            <Button variant="success" href="#productos" className="mt-3">
              Ver Productos
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
