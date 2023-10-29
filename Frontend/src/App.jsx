import React from "react";
import "./App.css";
import Navbar from "./Componets/Navbar";
import EventForm from "./Componets/EventForm";
import { Route, Routes } from "react-router-dom";

import Homepage from "./Componets/Pages/HomePage/Homepage";
import Result from "./Componets/Pages/Result";
import Card from "./Componets/Card";
import Description from "./Componets/Description";
import Cart from "./Componets/Cart";
import Footer from "./Componets/Footer";
import Cert from "./Componets/Cert";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/EventForm" element={<EventForm />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Description" element={<Description />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Certi" element={<Cert />} />
      </Routes>

      <Footer />
    </div>
  );
}
