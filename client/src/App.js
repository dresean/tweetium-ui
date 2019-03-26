import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import Register from './components/auth/register'
import './App.css';

class App extends Component {
  render() {
    return (
      <CookiesProvider>
      <Router>
      <Route path='/register' component={Register} />
      </Router>
      </CookiesProvider>
    );
  }
}

export default App;
