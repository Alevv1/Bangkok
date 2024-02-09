import React, {useState} from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () =>{
        const[menuOpen, setMenuOpen] = useState(false);


    return (
    <nav className={styles.navbar}>
        <img className={styles.logo} src={getImageUrl("nav/bangkok_logo.png")} alt="bgklogo" />
        <a className={styles.title} href="/">Bangkok</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
            src={
            menuOpen    
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            } alt="menu-button"
            onClick = {() => setMenuOpen (!menuOpen)}/>
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}
        >
                <li><a href="#historia">Historia</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#find">Donde Encontrarnos</a></li>
                <li><a href="#turnos">Turnos</a></li>
            </ul>
        </div>
    </nav>
    )
}