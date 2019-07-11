import React from 'react';
import Stats from './Stats';

/**
 * Displays the title and total players
 */
const Header = (props) => {
  return (
    <header>
    <Stats players={props.players} />
    <h1> { props.title }</h1>
    </header>
  );
}

export default Header;