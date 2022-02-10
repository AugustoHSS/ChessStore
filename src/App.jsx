import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import SignUp from './pages/sign-up'
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Reset from './globalStyles/Reset'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:productId" element={<Product />} />
      </Routes>
      <Reset />
    </BrowserRouter>
  )
}
