import React from 'react';

/**
 * Displays the score counter, adds or substracts to it 
 * if the corresponding buttons are interacted with
 */

const PlayerCounter = ({ score, updateScore, index }) => {

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => updateScore(index, -1)}> - </button>
      <span className="counter-score">{ score }</span>
      <button className="counter-action increment" onClick={() => updateScore(index, 1)}> + </button>
    </div>
  );
  
}

export default PlayerCounter;