import React from 'react';
import ThemeProvider from './context/ThemeProvider';

import Footer from './components/Footer';
import Header from './components/Header';
import Image from './components/Image';

import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Image/>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
