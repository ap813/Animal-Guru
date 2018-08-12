import React, { Component } from 'react'

import '../styles/Nav.css'

export default class Navbar extends Component {
  render() {
    return (
    <ul>
        <lh><b>Animal Guru</b></lh>
        <li><a href="/">Home</a></li>
        <li><a href="/cats">Cats</a></li>
        <li><a href="/dogs">Dogs</a></li>
        <li><a href="/volunteer">Volunteer</a></li>
        <li><a href="/about">About</a></li>
        <lu><a href="/login">Login</a></lu>
        <lu><a href="/signup">Signup</a></lu>
    </ul>
    )
  }
}
