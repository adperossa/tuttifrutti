import React, { Component } from 'react';
import Letters from './Letters';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

/**
 * Displays the title and total players
 */
const Header = () => {
  
  return (
    <header>
      <Stats />
      <div className="subheader">
        <h1>Tablero</h1>
        <Letters />
      </div>
      <Stopwatch />
    </header>
  );
}

export default Header;