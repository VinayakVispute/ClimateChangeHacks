import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Componets/Navbar";
import EventForm from "./Componets/EventForm";
import Homepage from "./Componets/Pages/Homepage";
import Result from "./Componets/Pages/Result";
import Card from "./Componets/Card";
import Description from "./Componets/Description";
import Cart from "./Componets/Cart";
import Footer from "./Componets/Footer";
import Cert from "./Componets/Cert";
import ErrorPage from "./Componets/ErrorPage";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "./Componets/Spinner";
import Account from "./Componets/Account";
import Test from "./Componets/Test";

export default function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    // Show a loading screen while waiting for authentication to complete
    return <Spinner />;
  }

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
        <Route path="/Test" element={<Test />} />
        <Route path="/Account" element={<Account />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
