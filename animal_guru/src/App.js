import React, { Component } from 'react';
import './App.css';
import PostForm from './components/PostForm'
import Home from './components/Home'
import Router from './Router';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router />
    )
  }
}


export default App;