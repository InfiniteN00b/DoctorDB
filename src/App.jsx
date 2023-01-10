import React, { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import SignInOutPage from './pages/Login'
import ResponsiveAppBar from './components/Appbar'
import Footer from './components/Footer'
// import { Routes, Route, Router, RouterProvider, BrowserRouter, Link } from "react-router-dom"
// import react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App" >
      <BrowserRouter>
      <ResponsiveAppBar />
        <br/>
        <br/>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<SignInOutPage /> } />
          <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
      
      {/* <Home /> */}
      <Footer />
    </div>
  )

}

export default App
