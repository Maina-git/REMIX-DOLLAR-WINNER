import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Exchange from './pages/Exchange'
import Balance from './pages/Balance'
import { useState } from 'react'
import Login from './pages/Login'
import SignOut from './pages/SignOut'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'

function App() {
  const [currency, setCurrency]=useState(0);
  const [auth, setIsAuth]=useState(false);

  if(!auth){
    return (
      <Login  setIsAuth={setIsAuth} />
    )
  }
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Exchange setCurrency={setCurrency}/>} />
        <Route path="/b" element={<Balance  currency={currency} setCurrency={setCurrency}/>}/>
        <Route path="/a" element={<AboutUs/>}/>
        <Route path="/s" element={<SignOut setIsAuth={setIsAuth}/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}
export default App;


