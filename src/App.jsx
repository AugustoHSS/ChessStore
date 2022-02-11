import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/sign-in';
import Reset from './globalStyles/Reset';
import React from 'react'
import SignUp from './pages/sign-up'
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Cart from './pages/cart'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Reset />
    </BrowserRouter>
  );
}
