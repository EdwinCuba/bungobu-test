import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../assets/templates/Header';

const App = () => (
  <Router>
    <Route path="/" component={Header}></Route>
  </Router>
)

export default App;