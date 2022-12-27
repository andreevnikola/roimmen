import React from "react";
import './logo.css';
import {
  Link
} from 'react-router-dom';

function Logo_img() {
  return (
    <nav>
      <div id="logo">
      <Link to={'/'}><img src='logo.png'></img></Link>
      </div>

      <div id="pages">
        <Link to={'/authenticate'}><div id='log'>Authenticate</div></Link>
      </div>
</nav>
  );
}

export default Logo_img;
