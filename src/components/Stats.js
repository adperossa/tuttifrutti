import React from 'react';

const Stats = (props) => {

  const totalPlayers = props.players.length; 
  const totalPoints = props.players.reduce( (acc, player) => { return acc + player.score }, 0)


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

}

export default Stats;