import { useState } from "react";
import './header.css'

import Card from "./card";
import "../App.css";

function Header() {
  return (
    <div className="Header-container">
      <div className="logo">

      </div>
      <div className="links">
        <a href="">home</a>
        <a href="">login</a>
        <a href="">more</a>
      </div>
    </div>
  );
}

export default Header;
