import React from 'react';

import './App.css';
import Image from './Image';
import Gatin from './cat.jpg'

function App() {
  return (
    <Image source={ Gatin } alternativeText="Foto de Gatinhoo"/>
  );
}

export default App;
