import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'; // Importa los componentes de navegación de Bootstrap
import { getImageUrl } from "../../utils";
import styles from "./Navbar.module.css";

export const Navbarr = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar expand="lg" className={styles.navbar}>
            <Container>
                <Navbar.Brand href="#">
                    <img className={styles.logo} src={getImageUrl("nav/bangkok4.png")} alt="bgklogo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setMenuOpen(!menuOpen)} />
                <Navbar.Collapse id="basic-navbar-nav" className={`${menuOpen && 'show'}`}>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#historia" onClick={() => setMenuOpen(false)}>Historia</Nav.Link>
                        <Nav.Link href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</Nav.Link>
                        <Nav.Link href="#find" onClick={() => setMenuOpen(false)}>Donde Encontrarnos</Nav.Link>
                        <Nav.Link href="#turnos" onClick={() => setMenuOpen(false)}>Turnos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
