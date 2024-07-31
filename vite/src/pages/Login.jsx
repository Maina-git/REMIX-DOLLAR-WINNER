import React from 'react'
import { FaGoogleWallet } from "react-icons/fa";
import "../styles/Login.scss";
import { useState } from 'react';
function Login({setIsAuth}) {
const [err, setErr]=useState(false);
const [access, setAccess]=useState(false);

function handleSubmit(e){
e.preventDefault();
const passone=e.target[0].value;
const passtwo=e.target[1].value;
if(passone===passtwo){
    setAccess(true);
    setErr(false);
    setIsAuth(true);
}
else{
    setErr(true);
    setAccess(false);
    setIsAuth(false);
}
}


  return (
    <div className="login">
        <div className="info">
          <h1>Welcome to <span className="bold">Remix</span> Productions</h1>
          <FaGoogleWallet className="icon"/>
            <p>My Wallet My Future</p>
        </div>
      

      <form  onSubmit={handleSubmit} >
        <label htmlFor="">NEW PIN</label>
        <input type="password" required/>
        <label htmlFor="">CONFIRM</label>
        <input type="password" required/>
        <button type="submit">LOGIN</button>
        {access  && <span className="access">Access granted</span> }
        {err && <span className="err">Something went wrong</span> }
      </form>
    </div>
  )
}

export default Login;
