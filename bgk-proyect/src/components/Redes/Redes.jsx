import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import styles from "./Redes.module.css";

export class Redes extends Component {
  render() {
    const iconStyles = {
      color: 'black', // Cambia el color de los iconos a negro
      fontSize: '40px' // Ajusta el tamaño de los iconos (cambia el valor según lo desees)
    };

    return (
      <Container fluid className="d-flex justify-content-center align-items-center p-5 text-center">
      <Row className="align-items-center">
          <Col>
            <h3 className={styles.title}>Seguinos en las redes</h3>
          </Col>
          <Col className="d-flex justify-content-center">
            <div>
              <a href="https://www.instagram.com/tucuenta" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="m-2" style={iconStyles} />
              </a>
              <a href="https://www.facebook.com/tucuenta" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="m-2" style={iconStyles} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Redes;
