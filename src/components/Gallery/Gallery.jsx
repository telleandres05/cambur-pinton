import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import './gallery-style.css'
import galImg from './gallery-img/picgallery.png'




export function Gallery(){
    return(
<div className="gallery m-0 p-0">
      {/* <h2 className="text-center mb-4" style={{ fontFamily: 'Magic Retro', color: '#003333' }}>
        Nuestros productos
      </h2> */}
      <div className="img p-0 m-0">
        <img className='img-fluid' src={galImg} alt="" />
        
        {/* {productos.map((item, i) => (
          <Col key={i}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img variant="top" src={item.imagen} alt={item.nombre} />
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{item.descripcion}</Card.Text>
                <Button variant="success">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
        ))} */}
      </div>
    </div>
    )
}