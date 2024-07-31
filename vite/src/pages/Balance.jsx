import React from 'react'
 import "../styles/Balance.scss";
 import { FaCircleDollarToSlot } from "react-icons/fa6";
 import { HiCurrencyDollar } from "react-icons/hi";
 import { RiMoneyEuroCircleFill } from "react-icons/ri";
function Balance({currency}){  

  let array=[1, -4, -100, 100000, -30, -15, -0.4, 400, 20, 100, 0.3, 4, 5, -5, 7, -8, 20];
  let random=Math.floor(Math.random()*array.length);
function Withdraw(){
  alert("Wait for a confirmation Message")
}


  return (
  <div className="main">    
  <div className="balance">
        <FaCircleDollarToSlot className="icon"/>
<h1>MY DOLLAR BILL</h1>
<p>Your New Amount in Dollars</p>

<div className="section">
    <h2>{Math.floor((currency*random)/130)}$</h2>
    <button onClick={Withdraw} >Withdraw</button>
</div>

<div className="currencies">
<div className="currency">
    <RiMoneyEuroCircleFill className="cicon"/>
    <p>{currency/130}</p>
    <span>Your bid amount in Euros</span>
</div>
<div className="currency">
<HiCurrencyDollar className="cicon"/>
<p>{currency/140}</p>
<span>Your bid amount in dollars</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Balance
