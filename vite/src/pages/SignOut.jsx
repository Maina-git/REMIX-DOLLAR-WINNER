import React from 'react'
import { FaGoogleWallet } from "react-icons/fa";
import "../styles/SignOut.scss";

const SignOut = ({setIsAuth}) => {

function signOut(){
    setIsAuth(false);
}

  return (
    <div className="SignOut">
        <FaGoogleWallet   className="icon"/>
      <p>Are you sure You wanna sign out</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default SignOut;
