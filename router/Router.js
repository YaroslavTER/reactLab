import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import About from './about';

export default App = () => (
  <Router>
    <Route exact path="/" render={() => <Home></Home>} />
    <Route path="/about" component={About}></Route>
  </Router>
);
