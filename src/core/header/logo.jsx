import React from "react";
import './logo.css';

function Logo_img() {
  return (
    <nav>
      <div id="logo">
      <img src='logo.png'></img>
      </div>

      <div id="pages">
        <div id='reg'>Register</div>
        <div id='log'>Login</div>
      </div>
</nav>
  );
}

export default Logo_img;
