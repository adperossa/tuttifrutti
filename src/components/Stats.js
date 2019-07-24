import React from 'react';
import { Consumer } from './Context';

const Stats = () => {
  return (
    <Consumer>
      { context => {

        const totalPlayers = context.length; 
        const totalPoints = context.reduce( (acc, player) => { return acc + player.score }, 0)
        
        return (
          <table className="stats">
          <tbody>
            <tr>
              <td>Jugadores:</td>
              <td>{totalPlayers}</td>
            </tr>
            <tr>
              <td>Puntos Totales:</td>
              <td>{totalPoints}</td>
            </tr>
            </tbody>
          </table>
        );

      }}
    </Consumer>
  );

}

export default Stats;