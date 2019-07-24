import React, { Component } from 'react';

class Letters extends Component {
  
  state = {
    letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    letter: "A"
  }

  /**
   * Picks a new letter from the pool and updates local state accordingly
   */
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
    return (
      <>
        <h2>
          Letra Actual: <span className="letter">{this.state.letter}</span>
        </h2>
        <button onClick={this.changeLetter}>
          Nueva Letra
        </button>
      </>
    );
  }
}

export default Letters;