import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Mapa() {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center">
      <Row>
        <Col xs={12} md={12} xl={12}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d345.44021794244003!2d-58.70897320277692!3d-34.54343346676922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd0dd76df09b%3A0x42e3cfc1548d456e!2sBangkok%20Coiffeur&#39;s%20Peluquer%C3%ADa!5e0!3m2!1ses!2sar!4v1709858990485!5m2!1ses!2sar"
            title="Google Maps"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="400"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Mapa;
