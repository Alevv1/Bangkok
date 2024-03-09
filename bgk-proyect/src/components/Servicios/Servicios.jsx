import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import serviciosData from '../../data/servicios.json';
import serviciosData2 from '../../data/servicios2.json';
import './Servicios.module.css';

const Servicios = () => {
  return (
      <Container fluid className="d-flex justify-content-center align-items-center p-5 bg-black " id='servicios' >
        <div className="row bg-white rounded-3 p-5 border border-white">
          <h3 className='text-center p-1' >SERVICIOS</h3>
          <h5 className='text-center'>Marzo / 2024</h5>
          <Col md={6}>
            <Table striped bordered className="m-auto">
              <thead>
                <tr>
                  <th>Nombre del Servicio</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {serviciosData.map(servicio => (
                  <tr key={servicio.id}>
                    <td>{servicio.nombre}</td>
                    <td>${servicio.precio.toFixed(0)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md={6} >
            <Table striped bordered className="m-auto">
              <thead>
                <tr>
                  <th>Nombre del Servicio</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {serviciosData2.map(servicio => (
                  <tr key={servicio.id}>
                    <td>{servicio.nombre}</td>
                    <td>${servicio.precio.toFixed(0)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <h5 className='text-center p-3 text-danger'>10% de descuento en todos nuestros servicios abonando en efectivo. Aceptamos tarjetas de crédito y débito.</h5>
          <h5 className='text-center  text-danger strong'>*Los precios son estimativos. Para trabajos especiales de coloración consultar el precio previamente. </h5>
        </div>
      </Container>
  );
};

export default Servicios;
