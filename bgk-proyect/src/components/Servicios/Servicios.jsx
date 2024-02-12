import React from 'react';
import { Container, Table } from 'react-bootstrap';
import serviciosData from '../../data/servicios.json';
import serviciosData2 from '../../data/servicios2.json';
import './Servicios.module.css'

const Servicios = () => {
  return (
    <section style={{ marginTop: '20px', minHeight: "121vh"}}>
      <div className="spacer"></div>

      <Container className="mt-4" >
        <h3 className='text-center p-3' id='servicios'>SERVICIOS</h3>
        <h5 className='text-center'>Febrero / 2024</h5>
        <div className="row bg-secondary rounded-3 p-5">
          <div className="col">
            <Table striped bordered>
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
          </div>
          <div className="col">
            <Table striped bordered>
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
          </div>
          <h5 className='text-center p-2 text-danger'>10% de descuento en todos nuestros servicios abonando en efectivo. Aceptamos tarjetas de crédito y débito.</h5>
          <h5 className='text-center p-2 text-danger strong'>*Los precios son estimativos. Para trabajos especiales de coloración consultar el precio previamente. </h5>

        </div>

        
      </Container>
      
    </section>
    
  );
}
export default Servicios;
