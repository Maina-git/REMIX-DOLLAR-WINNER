import React from 'react';
import "../styles/AboutUs.scss"
import { FaGoogleWallet } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="AboutUs">
        <h1>For the Mobile Users</h1>
        <FaGoogleWallet className="icon"/>
        <h2>Creator</h2>
      <div className="section">
<div className="infoA">
<img src="/images/WhatsApp Image 2024-07-27 at 16.38.13_02cbf9fc.jpg" width="40px" />
<h3>Name: Francis</h3>
<p>Location:Kenya</p>
</div>
<div className="infoB">
<p>+254 0793 720 578</p>
<p>Occupation:Frontend developer</p>
</div>
      </div>
<h2>Technologies</h2>
      <div className="section">
<div className="infoA">
    <h1>Langauges</h1>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javsascript</li>
    </ul>
</div>
<div className="infoB">
    <h1>Frameworks</h1>
    <ul>
        <li>React Js</li>
        <li>Sass Css</li>
    </ul>
</div>
      </div>
<h2>Others</h2>
      <div className="section">
<div className="infoA">
    <ul>
        <li>Pizza Party</li>
        <li>Caradil</li>
        <li>Remix</li>
    </ul>
</div>
<div className="infoB">
    <ul>
        <li>React dev</li>
        <li>React Native</li>
        <li>ALX kenya</li>
    </ul>
</div>
      </div>

    </div>
  )
}

export default AboutUs;

