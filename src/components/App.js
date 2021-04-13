import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as PlayerActionCreators from '../redux/actions/player';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {

  
  // /**
  //  * Changes the score of the player based on user input
  //  * @param {number} index The player's ID
  //  * @param {number} delta The amount to increase or decrease the score by
  //  * 
  //  */
  // updateScore = (index, delta) => {
  //   if (delta < 0 && this.state.players[index].score <= 0) return;
  //   this.setState(prevState => {

  //     let newState = {
  //       players: prevState.players.map(p => {
  //         if (p !== prevState.players[index]) {
  //           return { ...p }
  //         } else {
  //           return {
  //             ...p,
  //             score: p.score += delta
  //           }
  //         }
  //       })
  //     }

  //     return newState;
  //   });
  // }

  /**
   * Searchs for the highest score among the players and sets a
   * global state stating which score is that
   */
  checkHighScore = () => {
    let highestScore = this.props.players.reduce((acc, curr) => {
      if (curr.score > acc) { return curr.score; } else { return acc; }
    }, 0);

    if (highestScore > 0) { return highestScore; } else { return null; }
  }

  render() {
    const { dispatch, players } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    return (
      <div className="scoreboard">
        <Header
          title="Tablero"
          players={players}
        />

        {/* Player list */}
        {players.map((player, index) =>
          <Player
            playerName={player.name}
            playerScore={player.score}
            key={player.id.toString()}
            removePlayer={removePlayer}
            updateScore={updatePlayerScore}
            checkHighScore={this.checkHighScore}
            isHighScore={this.checkHighScore() === player.score}
            id={player.id}
            index={index}
          />
        )}

        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  }

}

const mapStateToProps = state => (
  {
    players: state.players
  }
);

export default connect(mapStateToProps)(App);
