import React from 'react';
import "../styles/Exchange.scss";
import { BsCurrencyExchange } from "react-icons/bs";
import { useState } from 'react';

const Exchange = ({setCurrency}) => {

    function handleSubmit(e){
        e.preventDefault();
        alert("check your new Account in Lucky Win")
    }


  return (
    <div className="exchange">
        <div className="dep">
            <BsCurrencyExchange className="icon"/>
        <form onSubmit={handleSubmit}>
            <span>Become a  Grand Winner</span>
            <input type="Number" required  onChange={(e)=>setCurrency(e.target.value)} placeholder="Add your amount in Kes" />        
            <button type="submit">TRY A LUCKY WIN</button>
        </form>
        </div>
        <div>
    
</div>
    </div>
  )
}

export default Exchange;
