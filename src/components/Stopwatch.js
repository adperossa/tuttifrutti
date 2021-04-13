import React, { Component } from 'react';

class Stopwatch extends Component {

  state = {
    isRunning: false,
    previousTime: 0,
    elapsedTime: 0
  }

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState( prevState => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
      }));
    }
  }

  handleStopwatch = () => {

    if (!this.state.isInitialized) { 
      this.intervalID = setInterval( () => this.tick(), 100);
    }

    this.setState( prevState => ({
      isRunning: !prevState.isRunning
    }));
    if (!this.state.isRunning) {
      this.setState({ previousTime: Date.now() });

    }
  }

  handleReset = () => {
    this.setState({
      elapsedTime: 0
    });
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {

    const seconds = Math.floor( this.state.elapsedTime / 1000 );

    return (
      <div className="stopwatch">
        <h2>Reloj</h2>
        <span className="stopwatch-time">{ seconds }</span>
        <button onClick={this.handleStopwatch}>
          { this.state.isRunning ? 'Parar' : 'Iniciar' }
        </button>
        <button onClick={this.handleReset}>Resetear</button>
      </div>
    );
  }
}

export default Stopwatch;