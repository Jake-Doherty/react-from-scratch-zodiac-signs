import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="App-header">
      <img src={`/images/astrology-logo.png`} className="App-logo" alt="logo" />
      <p className="page-header">Zodiac Signs, Symbols, & Dates</p>
    </header>
  );
}
