import React from 'react';

class App extends React.Component {

  state = {
    players: [
      {
        name: "Axel",
        id: 1
      },
      {
        name: "Carlos",
        id: 2
      },
      {
        name: "Nelson",
        id: 3
      },
      {
        name: "Salem",
        id: 4
      }
    ]
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => ({
        players: prevState.players.filter( p => p.id !== id )
      })
    );
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length} 
        />

        {/* Player list */}
        { this.state.players.map( player => 
          <Player 
            playerName={player.name}
            playerScore={player.score}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
            id={player.id}
          />
        )}
      </div>
    );
  }

}

const Header = (props) => {
  return (
    <header>
      <h1> { props.title }</h1>
      <span className="stats">Players: {  props.totalPlayers }</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
        {props.playerName}
      </span>

      <PlayerCounter score={props.playerScore}/>
    </div>
  );
}

class PlayerCounter extends React.Component {

  state = {
    score: 0
  }

  incrementScore = () => {
    this.setState( prevState => ({
      state: prevState.score += 1
    }));    
  }

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

export default App;
