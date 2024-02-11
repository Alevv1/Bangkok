import React from 'react'
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import Historia from './components/Historia/Historia'
import Inicio from './components/Inicio/Inicio'
import { Servicios } from './components/Servicios/Servicios'



export default function App() {
  return (
    <section>
      <Navbar/>
      <Historia/>
      <Servicios/>
    </section>
  )
}
