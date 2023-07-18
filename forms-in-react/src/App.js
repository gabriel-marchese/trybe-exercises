import React from 'react';
import './App.css';

import Cor from './Cor';

class App extends React.Component {

  constructor() {
    super()

    this.handler = this.handler.bind(this)

    this.state = {
      cor: '',
      nome: '',
      idade: 0,
      email: '',
      agua: false,
      erro: false,
    }
  };

  handler({ target }) {

    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      <div className="App">
        <form>
          <Cor value={this.state.cor} handler={this.handler} erro={this.state.erro}/>
          <label>
            Qual o seu nome ?
            <input name='nome' type='text' value={this.state.nome} onChange={ this.handler }></input>
          </label>
          <label>
            Qual sua idade ? 
            <input name='idade' type='number' value={this.state.idade} onChange={this.handler} ></input>
          </label>
          <label>
            Qual seu Email ? 
            <input name='email' type='email' value={this.state.email} onChange={this.handler} ></input>
          </label>
          <label>
            Bebeu água ?
            <input name='agua' type='checkbox' value={this.state.agua} onChange={this.handler}></input>
          </label>
        </form>
      </div>
  );
  }
    
}

export default App;
