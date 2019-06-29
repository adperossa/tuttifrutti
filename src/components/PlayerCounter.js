import React from 'react';

/**
 * Displays the score counter, adds or substracts to it 
 * if the corresponding buttons are interacted with
 */

class PlayerCounter extends React.Component {

  state = {
    score: 0
  }

  /**
   * Adds 1 to the score
   */
  incrementScore = () => {
    this.setState( prevState => ({
      state: prevState.score += 1
    }));    
  }

  /**
   * Substracts 1 from the score, as long as it's >0
   */
  decrementScore = () => {
    this.setState( prevState => ({
      state: prevState.score > 0 ? 
        prevState.score -= 1 :
        prevState.score
    }));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

export default PlayerCounter;