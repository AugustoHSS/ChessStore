import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import SignUp from './pages/sign-up'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="sign" element={<Lobby className="seila" />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}
