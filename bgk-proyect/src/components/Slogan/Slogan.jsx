import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import styles from "./Slogan.module.css";

export class Slogan extends Component {
  render() {
    return (
      <Container className="d-flex justify-content-center align-items-center">
        <h3 className={styles.title}>Descubre tu nuevo look</h3>
      </Container>
    );
  }
}

export default Slogan;
