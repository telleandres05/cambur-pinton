import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Gallery } from './Gallery/Gallery'


const productos = [
  {
    nombre: 'Tortitas de Yuca',
    descripcion: 'Ricas y libres de gluten, perfectas para meriendas',
    // imagen: '/src/assets/tortitas.png',
    iconos: ['gluten-free', 'natural']
  },
  // ...otros productos
]

export function GalleryContainer() {
  return (
    <Gallery/>
  )
}