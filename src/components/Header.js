import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

/**
 * Displays the title and total players
 */
const Header = (props) => {
  return (
    <header>
    <Stats players={props.players} />
    <h1> { props.title }</h1>
    <Stopwatch />
    </header>
  );
}

export default Header;