import React from 'react';
import styles from "./Historia.module.css";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getImageUrl } from "../../utils";
import Image from 'react-bootstrap/Image';

function Historia() {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center p-5" style={{ backgroundColor: 'black'}}>
      <Row>
        <Col xs={6} md={3} className="d-none d-sm-block">
          <Image src={getImageUrl("projects/3.png")} fluid className='d-block w-100' />
        </Col>
        <Col md={6} className="text-center">
          <div className='container my-auto bg-secondary rounded-3 p-5' id='historia'>
            <h3 className={styles.title}>HISTORIA</h3>
            <p className={styles.content}>Desde nuestro comienzo en 1997, nos hemos comprometido a ofrecer un servicio excepcional en el mundo del cabello.
            
             Nuestro equipo de profesionales se ha perfeccionado con cursos y seminarios de renombre nacional e internacional. Además, contamos con un centro de formación exclusivo, 
             donde nuestro personal se sumerge en un aprendizaje semanal para estar a la vanguardia de las últimas tendencias y técnicas.</p>
          </div>
        </Col>
        <Col xs={6} md={3} className="d-none d-sm-block">
          <Image src={getImageUrl("projects/3.png")}  style={{width: "50vh"}}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Historia;
