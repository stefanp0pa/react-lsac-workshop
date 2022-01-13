import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Workspace from './pages/Workspace/Workspace';
import About from './pages/About/About';
import Fun from './pages/Fun/Fun';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/fun/:id">
            <Fun/>
          </Route>
          <Route path="/">
            <Workspace/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
