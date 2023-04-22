import React from 'react'
import './App.css'
import Navbar from './Componets/Navbar'
import EventForm from './Componets/EventForm'
import { Route, Routes } from 'react-router-dom';

import Homepage from './Componets/Pages/Homepage'
import Result from './Componets/Pages/Result' 
export default function App() {

  return (


  <div >
  <Navbar /  >
   <Routes> 
 <Route path="/Jayesh" element={   <Homepage />   } />
 <Route path="/EventForm" element={   <EventForm />   } />
  <Route path="/Result" element={   <Result />   } />


 

 
 
 
  </Routes>
  
 
               
        </div>
  )
}

 
