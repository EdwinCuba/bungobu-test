import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home.jsx';
import Layout from '../assets/templates/Layout'

const App = () => (
  <Router>
    <Layout>
      <Route exact path="/" component={Home} />
    </Layout>
    <Route exact path="/instagram" component={() => {
      window.location.hash = '/';
      window.open('https://www.instagram.com/bungobustore');
      return null;
    }} />
    <Route exact path="/facebook" component={() => {
      window.location.hash = '/';
      window.open('https://www.facebook.com/Bungobu-Store-112793324181869');
      return null;
    }} />
  </Router>
)

export default App;