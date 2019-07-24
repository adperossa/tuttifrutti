import React from 'react';
import { Consumer } from './Context';

/**
 * Displays the score counter, adds or substracts to it 
 * if the corresponding buttons are interacted with
 */

const PlayerCounter = ({ score, index }) => {

  return (
    <Consumer>
      { context => (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => context.actions.updateScore(index, -1)}> - </button>
        <span className="counter-score">{ score }</span>
        <button className="counter-action increment" onClick={() => context.actions.updateScore(index, 1)}> + </button>
      </div>
      )}
    </Consumer>
    
  );
  
}

export default PlayerCounter;