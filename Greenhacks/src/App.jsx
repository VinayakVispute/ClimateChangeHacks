import React from 'react'
import './App.css'
import Navbar from './Componets/Navbar'
import EventForm from './Componets/EventForm'
import { Route, Routes } from 'react-router-dom';

import Homepage from './Componets/Pages/Homepage'

export default function App() {

  return (


  <div >
  <Navbar /  >
   <Routes> 
 <Route path="/Jayesh" element={   <Homepage />   } />
 <Route path="/EventForm" element={   <EventForm />   } />

 

 
 
 
  </Routes>
  
 
               
        </div>
  )
}

 
