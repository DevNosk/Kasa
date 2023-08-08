import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import NotFound from "./NotFound";
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./About";
export default function RouterKasa() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element= {<NotFound/>} />
        <Route path="/a-propos" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}