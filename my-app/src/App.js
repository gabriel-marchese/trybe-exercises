import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './redux/actions';

function App(props){
  const { count, dispatch } = props;
  
  return (
    <div className="App">
      <h1>Contador</h1>
      <h2>{ count }</h2>
      <button onClick={() => dispatch(actionCreator(1))}>Incrementar 1</button>
      <button onClick={() => dispatch(actionCreator(5))}>Incrementar 5</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.count,
})

export default connect(mapStateToProps)(App);
