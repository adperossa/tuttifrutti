import React, { Component } from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

/**
 * Displays the title and total players
 */
class Header extends Component {
  
  state = {
    letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    letter: "A"
  }

  changeLetter = () => {
    this.setState(prevState => {
      const newLetters = prevState.letters.filter( l => l !== prevState.letter);
      let newletter = newLetters[Math.floor(Math.random() * newLetters.length)];
      if (newletter === undefined) newletter = "---";

      return {
        letters: newLetters,
        letter: newletter
      }
  
    });
    
  }
  

  render() {
    const { title, players } = this.props;
    return (
    <header>
      <Stats players={players} />
      <div className="subheader">
        <h1>{ title }</h1>
        <h2>Letra Actual: <span className="letter">{this.state.letter}</span></h2>
        <button onClick={this.changeLetter}>Nueva Letra</button>
      </div>
      <Stopwatch />
    </header>
    );
  }
}

export default Header;