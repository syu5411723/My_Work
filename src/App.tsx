import React from 'react';
import Header from './components/template/Header';
import About from './components/template/Main/About';
import Contact from './components/template/Main/Contact';
import Thumb from './components/template/Main/Thumb';
import Work from './components/template/Main/Work';

function App() {
  return (
    <>
      <Header />
      <Thumb />
      <About/>
      <Work />
      <Contact /> 
    </>
  );
}

export default App;
