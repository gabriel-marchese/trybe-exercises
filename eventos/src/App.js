import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.RedClick = this.RedClick.bind(this)
    
    this.BlueClick = this.BlueClick.bind(this)
    this.GreenClick = this.GreenClick.bind(this)
    this.state = {
      RedNumber: 0,
      BlueNumber: 0,
      GreenNumber:0,
    }
  }

  color(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  RedClick() {
    this.setState((estadoAnterior, _props) => ({
      RedNumber: estadoAnterior.RedNumber + 1,
    }), () => {
      console.log(`Cor: ${this.color(this.state.RedNumber)}`);
    }
    );
  };

  BlueClick() {
    this.setState((estadoAnterior) => ({
      BlueNumber: estadoAnterior.BlueNumber + 1,
    }));
  };

  GreenClick() {
    this.setState((estadoAnterior) => ({
      GreenNumber: estadoAnterior.GreenNumber +1,
    }));
  };

  render() {
    return (
      <>
        <button onClick={this.RedClick} style={ {backgroundColor: this.color(this.state.RedNumber)} }>Red: {this.state.RedNumber}</button>
        <button onClick={this.BlueClick} >Blue: {this.state.BlueNumber}</button>
        <button onClick={this.GreenClick} >Green: {this.state.GreenNumber}</button>
      </>
    );
  }
}

export default App;
