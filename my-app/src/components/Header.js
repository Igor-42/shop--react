// src/components/Header.js
import React from "react";
import "./Header.css"; // стилі для хедера

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo192.png" alt="Logo" />
        <span>MyApp</span>
      </div>

      <nav className="nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>

      <div className="auth">
        <button>Login</button>
      </div>
    </header>
  );
}

export default Header;
