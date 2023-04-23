import React from 'react'
import './App.css'
import Navbar from './Componets/Navbar'
import EventForm from './Componets/EventForm'
import { Route, Routes } from 'react-router-dom';

import Homepage from './Componets/Pages/Homepage'
import Result from './Componets/Pages/Result' 
import Card from './Componets/Card'
import Description from './Componets/Description';
import Cart from './Componets/Cart';

 
export default function App() {

  return (


  <div >
  <Navbar /  >

   <Routes> 
 <Route path="/Home" element={   <Homepage />   } />
 <Route path="/EventForm" element={   <EventForm />   } />
  <Route path="/Result" element={   <Result />   } />
<Route path="/Card" element={   <Card />   } />
<Route path="/Description" element={   <Description />   } />
<Route path="/Cart" element={   <Cart />   } />

 

 
 
 
  </Routes>
  
 
               
        </div>
  )
}

 
