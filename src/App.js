import React from "react";
import Hero from "./pages/Hero.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ProductAll from "./pages/ProductAll.jsx";
import ProductDetils from "./pages/ProductDetils.jsx";
import AboutPages from "./pages/AboutPages.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer } from "react-toastify";
import Cart from "./pages/Cart.jsx";
import ChekOut from "./pages/ChekOut.jsx";

const App = () => {
  return (
    <BrowserRouter basename="/E-Commerce">
      <ToastContainer position="top-center" autoClose={2000} />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ProductAll" element={<ProductAll />} />
        <Route path="/product/:id" element={<ProductDetils />} />
        <Route path="/AboutPages" element={<AboutPages />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ChekOut" element={<ChekOut />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
