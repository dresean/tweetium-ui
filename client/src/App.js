import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Register from './components/auth/register'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <Route path='/register' component={Register} />
      </Router>
    );
  }
}

export default App;
