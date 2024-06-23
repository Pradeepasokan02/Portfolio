import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <main>
      <Home />
      <About />
      <Projects />
    </main>
    <Footer />
  </div>
);

export default App;

