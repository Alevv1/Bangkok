import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css'
import { Navbarr } from './components/Navbar/Navbar'
import Historia from './components/Historia/Historia'
import Inicio from './components/Inicio/Inicio'
import './custom.scss'
import Servicios from './components/Servicios/Servicios'
import Footer from './components/Footer'
import CarouselPage from './components/Carousel/Carousel';
import Slogan from './components/Slogan/Slogan';
import Redes from './components/Redes/Redes'

export default function App() {
  return (
    <section>
      <Navbarr/>
      <Slogan/>
      <CarouselPage/>

      <Historia/>
      <Servicios/>
      <Redes/>

      <Footer/>
    </section>
  )
}
