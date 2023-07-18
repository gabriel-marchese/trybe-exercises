import React, { useState, useEffect } from "react";

function App() {

  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
  }, [])

  useEffect(() => {
    const intervalID = setInterval(() => {
      document.title = (new Date()).toLocaleTimeString()
    }, 1000)

    return () => {
      clearInterval(intervalID)
    }
  }, [])

  return (
    <div>
      <h1>Placar: { counter }</h1>
      <button onClick={() => {setCounter(counter + 1)}}>Somar 1</button>
      <button onClick={() => {setCounter(counter - 1)}}>Subtrair 1</button>
    </div>
  );
}

export default App;
