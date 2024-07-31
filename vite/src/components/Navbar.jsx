import React from 'react'
import "../styles/Navbar.scss"
import { Link } from 'react-router-dom'
import { BsCurrencyExchange } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import { MdCancel } from "react-icons/md";
import { useState } from 'react';

function Navbar() {
    const [showNav, setShowNav]=useState(false);
  return (
    <div className="navbar">
      <div className="logo">
        <BsCurrencyExchange className="icon"/>
      </div>
      <div className="links">
        <Link to="/">Exchange</Link>
        <Link to="/b">Lucky win</Link>
        <Link to="/a">About Us</Link>
        <Link to="/s">Sign Out</Link>
    </div>

      <div className={`${showNav ? "show" : "hide"}`}>
        <Link to="/">Exchange</Link>
        <Link to="/b">Lucky win</Link>
        <Link to="/a">About Us</Link>
        <Link to="/s">Sign Out</Link>
      </div>  
      <button onClick={(prev)=>setShowNav(prev=>!prev)} className="menuButton">{ !showNav ? <TiThMenu/> : <MdCancel/>}</button>
    </div>
  )
}

export default Navbar
