import React, { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import SignInOutPage from './pages/Login'
import ResponsiveAppBar from './components/Appbar'
import Footer from './components/Footer'
import AuthContext from './components/AuthContext'
// import { Routes, Route, Router, RouterProvider, BrowserRouter, Link } from "react-router-dom"
// import react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ddash from './pages/Ddash'
import Pdash from './pages/Pdash'

function App() {
  const [user, setUser] = useState(null)
  const [logged, setLogged] = useState(0) // 0: not checked, 1: logged In, 2: not logged In

  useEffect(() => {
    console.log('logged', logged, user)
    if (logged === 0) {
      fetch('/api/login', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
      }).then((res) => res.json())
        .then((data) => {
          if (data && data.email) {
            setLogged(1)
            console.log("loggedIn", data)
            setUser(data)
          }
          else {
            setLogged(2)
            setUser(null)
          }
        })
    }
    else if (logged === 2) {
      fetch('/api/logout', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
      }).then((res) => res.json())
        .then((data) => setUser(null))
    }
  }, [logged])

  const auth = {
    user, setUser, logged, setLogged
  }

  return (
    <AuthContext.Provider value={auth}>
      <div className="App" >
        <BrowserRouter>
        <ResponsiveAppBar />
          <br/>
          <br/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<SignInOutPage tab={0} /> } />
            <Route path="/signup" element={<SignInOutPage tab={1} /> } />
            <Route path="/about" element={<About />} />
            <Route path="/doctordash" element={<Ddash/>} />
            <Route path="/patientdash" element={<Pdash />} />
            <Route path="*" element={<h1>404: Not Found</h1>} />

        </Routes>
      </BrowserRouter>
        
        {/* <Home /> */}
        <Footer />
      </div>
    </AuthContext.Provider>
  )

}

export default App
