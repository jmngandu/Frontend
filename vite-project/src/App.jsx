import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import SectionMain from './SectionMain'

function App() {
   return (
    <div>
    <NavBar />
      <h1>JTHREEGLOBALLY</h1>
      <div className="Mainsub">
      <SectionMain 
      img="./src/Carlogo/ferari.jpg"
      brand="Ferari"
     type="Germany Machine"
     cost="$6m ksh"
      />
      <SectionMain 
      img="./src/Carlogo/mercedes-benz.jpg"
      brand="Mercedes"
     type="Germany Machine"
     cost="$10m ksh" 
     />  
      <SectionMain
        img="./src/Carlogo/jaguar.jpg"
        brand="Jaguar"
       type="Germany Machine"
       cost="$4m ksh"
       />
        <SectionMain
        img="./src/Carlogo/porsche.jpg"
        brand="Porche"
       type="Germany Machine"
       cost="$8m ksh"
       />

       <SectionMain 
        img="./src/Carlogo/toyota.jpg"
        brand="Toyota"
       type="Japan Machine"
       cost="$3m ksh"
       />

       <SectionMain
        img="./src/Carlogo/bmw.jpg"
        brand="BMW"
       type="Germany Machine"
       cost="$4m ksh"
       />
       </div>
     </div>
  )
}

export default App
