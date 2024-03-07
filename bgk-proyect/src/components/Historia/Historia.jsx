import React from 'react';
import styles from "./Historia.module.css";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getImageUrl } from "../../utils";
import Image from 'react-bootstrap/Image';

function Historia() {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center p-5 text-center" style={{ backgroundColor: 'black'}} id='historia'>
      <Row>

        <Col className="text-center">
          <div className='container my-auto bg-black rounded-3 p-5 border border-white' >
            <h3 className={styles.title}>NOSOTROS</h3>
            <p className={styles.content}>Desde nuestro comienzo en 1997, nos hemos comprometido a ofrecer un servicio excepcional en el mundo del cabello.
            
             Nuestro equipo de profesionales se ha perfeccionado con cursos y seminarios de renombre nacional e internacional. Además, contamos con un centro de formación exclusivo, 
             donde nuestro personal se sumerge en un aprendizaje semanal para estar a la vanguardia de las últimas tendencias y técnicas.</p>
          </div>
        </Col>

      </Row>
    </Container>
  );
}

export default Historia;
