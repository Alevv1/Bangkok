import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import styles from "./DondeEncontrarnos.module.css";
import Mapa from '../Mapa/Mapa';

function DondeEncontrarnos() {
    return (
        <Container fluid className="d-flex justify-content-center align-items-center p-5 text-center">
        <Row className="align-items-center">
            <Col>
              <h3 className={styles.title}>Donde Encontrarnos</h3>
            </Col>
            <Col className="d-flex justify-content-center ">
              <div>
                <p>Paunero 1387, San Miguel, Buenos Aires</p>
                <p>De 9:00 a 18:00hs</p>

              </div>
              
            </Col>
          </Row>
        </Container>
    );
}

export default DondeEncontrarnos;
