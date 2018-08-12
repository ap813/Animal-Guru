import React, { Component } from 'react'
import Navbar from './Navbar';

export default class Volunteer extends Component {
  render() {
    return (
      <div>
        <Navbar />
            
        <div class="container">
            <div className="MarginingPostForm">
                <div class="jumbotron">
                    <div className="Middle">
                        <h1>Becoming a Volunteer</h1>
                        <p><em>Responsiblities</em></p>
                    </div>
                </div>
            </div>

            <div class="card bg-light">
                <div class="card-block">
                    <p class="card-text">
                    <h1 className="Underlining">Work</h1>
                    
                    </p>
                    <div class="Middle">
                    <a href="/signup" class="btn btn-secondary">Become a Volunteer</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
