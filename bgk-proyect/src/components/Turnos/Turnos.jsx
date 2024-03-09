import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./Turnos.module.css";

export class Turnos extends Component {
    render() {
        return (
            <Container fluid className="d-flex justify-content-center align-items-center p-5">
                <Row>

                    <Col className='text-center'>
                        <h3 className={styles.title}>Turnos</h3>
                        <p>Para reservar un turno podes comunicarte por Whatsapp o llamando al</p>
                        <h3>1157034777</h3>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Turnos;
