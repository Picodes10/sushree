import React from'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Connect from './components/Connect/Connect';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Connect />
    </div>
  );
}

export default App;
