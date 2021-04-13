import React from 'react';

/**
 * Displays the score counter, adds or substracts to it 
 * if the corresponding buttons are interacted with
 */

const PlayerCounter = ({ score, updateScore, id }) => {

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => score > 0 && updateScore(id, -1)}> - </button>
      <span className="counter-score">{ score }</span>
      <button className="counter-action increment" onClick={() => updateScore(id, 1)}> + </button>
    </div>
  );
  
}

export default PlayerCounter;