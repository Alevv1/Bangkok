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


export default function App() {
  return (
    <section>
      <Navbarr/>
      <CarouselPage/>

      <Historia/>
      <Servicios/>
      <Footer/>
    </section>
  )
}
