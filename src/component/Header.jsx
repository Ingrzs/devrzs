import React from "react";
import "../component/Header.css";

export default function Header() {
  return (
    <header>
      <div className="header">
        <div className="logo"> DEVRZS</div>
        <div className="nav">
          <ul>
            <li>Home</li>
            <li>About me</li>
            <li>Projects</li>
            <li>Contacto</li>
            <li>Resume</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
