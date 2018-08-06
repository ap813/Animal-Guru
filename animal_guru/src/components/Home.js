import React, { Component } from 'react'
import '../styles/Home.css'
import Navbar from './Navbar';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Navbar />
    )
  }
}

export default Home