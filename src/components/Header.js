import React from 'react';

/**
 * Displays the title and total players
 */
const Header = (props) => {
  return (
    <header>
      <h1> { props.title }</h1>
      <span className="stats">Players: {  props.totalPlayers }</span>
    </header>
  );
}

export default Header;