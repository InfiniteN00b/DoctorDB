import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { SnackbarProvider, useSnackbar } from "notistack"
import Snack from './components/Snack'
import SignInOutPage from './pages/Login'
import ResponsiveAppBar from './components/Appbar'
import Footer from './components/Footer'
import AuthContext from './components/AuthContext'
// import { Routes, Route, Router, RouterProvider, BrowserRouter, Link } from "react-router-dom"
// import react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ddash from './pages/Ddash'
import Pdash from './pages/Pdash'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';
import UserProfile from './pages/UserProfile'
import Pappointments from './pages/Pappointments'

function App() {
  const [user, setUser] = useState(null)
  const [logged, setLogged] = useState(0) // 0: not checked, 1: logged In, 2: not logged In
  const notistackRef = useRef()

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
    <SnackbarProvider
      dense
      preventDuplicate
      maxSnack={3}
      anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
      }}
      ref={notistackRef}
      action={key => (
          <IconButton aria-label="Close" onClick={() => notistackRef.current.closeSnackbar(key)}>
              <CloseIcon style={{color: "white"}} />
          </IconButton>
      )}
    >
    <AuthContext.Provider value={auth}>
      <div className="App" >
        <Snack></Snack>
        <BrowserRouter>
        <ResponsiveAppBar />
          <br/>
          <br/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<SignInOutPage tab={0} /> } />
            <Route path="/signup" element={<SignInOutPage tab={1} /> } />
            <Route path="/about" element={<About />} />
            <Route path="/Appointments" element={<Ddash/>} />
            <Route path="/BookAppointment" element={<Pdash />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/My%20Appointments" element={<Pappointments />} />
            <Route path="*" element={<h1>404: Not Found</h1>} />

        </Routes>
      </BrowserRouter>
        
        {/* <Home /> */}
        <Footer />
      </div>
    </AuthContext.Provider>
    </SnackbarProvider>
  )

}

export default App
