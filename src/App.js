import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./components/Products/Products";
import ProductDetail from "./components/ProductDetails/ProductDetails";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AddProduct from "./components/AddProduct/AddProduct";
import AddCategory from "./components/AddCategory/AddCategory";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/add/product" element={<AddProduct/>} />
        <Route path="/add/category" element={<AddCategory/>} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
