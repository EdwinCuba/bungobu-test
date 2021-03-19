import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../assets/templates/Header';

const App = () => (
  <Router>
    <Route path="/" component={Header}></Route>
    <Route path="/instagram" component={() => {
      window.open('https://www.instagram.com/bungobustore/');
      window.location.hash = '/';
      return null;
    }} />
  </Router>
)

export default App;