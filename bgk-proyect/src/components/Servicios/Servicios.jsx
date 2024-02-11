import React from 'react'
import styles from "./Servicios.module.css";
import { getImageUrl } from "../../utils";
import serviciosData from '../../data/servicios.json';

import serviciosData2 from '../../data/servicios2.json';

export const Servicios = () => {
  return (
    <section className={styles.container}>
        <h3 id='servicios'> SERVICIOS</h3>
    <table className={styles.servicios}>
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
    </table>
    <table className={styles.servicios}>
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
    </table>
    </section>

    )
}
