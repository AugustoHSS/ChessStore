import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import SignUp from './pages/sign-up';
import SignIn from './pages/sign-in';
import Reset from './globalStyles/Reset';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <Reset />
    </BrowserRouter>
  );
}
