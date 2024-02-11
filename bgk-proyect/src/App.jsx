import React from 'react'
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import Historia from './components/Historia/Historia'
import Inicio from './components/Inicio/Inicio'
 
export default function App() {
  return (
    <section>
      <div className={styles.test}></div>
      <Inicio/>
      <Navbar/>
      <Historia/>
    </section>
  )
}
