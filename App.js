import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </>
    );
  }
}
export default App;