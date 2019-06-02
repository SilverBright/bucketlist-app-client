import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import './App.css';

const App = () => {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="navbar">
            <Navbar />
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </div>
        </div>
      </BrowserRouter>
    );
  }

export default App;