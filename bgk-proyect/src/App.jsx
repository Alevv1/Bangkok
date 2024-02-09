import React from 'react'
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import Historia from './components/Historia/Historia'
 
export default function App() {
  return (
    <section>
      <div className={styles.test}></div>
      <Navbar/>
      <Historia/>
    </section>
  )
}
