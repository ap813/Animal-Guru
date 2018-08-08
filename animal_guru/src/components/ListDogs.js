import React, { Component } from 'react'
import Navbar from './Navbar'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {getPuppies} from '../actions/postActions'
import '../styles/listDogs.css'



class ListDogs extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dog: {},
      source: '',
      list: true
    }

    this.dateDifference = this.dateDifference.bind(this)
    this.setDog = this.setDog.bind(this)
    this.reset = this.reset.bind(this)
  }

  componentWillMount() {
    // Who let the Dogs out?
    this.props.getPuppies()
  }

  dateDifference() {

  }

  setDog(dog, source) {
    this.setState({
      dog,
      source,
      list: false
    })
  }

  reset() {
    this.setState({
      dog: {},
      source: '',
      list: true
    })
  }

  render() {
    return (
      this.state.list ? (
        <div>
        <Navbar />
        <div class="container">
          <div className="Margining">

             <div class="jumbotron">
                  <div className="Middle">
                      <h1 className="Jumbo-Title">Dogs for Adoption</h1>
                  </div>
              </div>

            <div class="row">
            {
              this.props.dogs.map( (dog, i) => {
                const source = "http://animalguru.store/dogs/" + dog.breed + "-" + dog.name + ".jpg"
                return (
                  <div class="col-md-4">
                    <div class="card bg-light">
                        <img class="card-img-top" src={source} alt="Card image cap"/>
                        <div class="card-block">
                            <h2 className="title">{dog.name}</h2>
                            <h4 class="card-text">{dog.breed}</h4>
                            <p class="card-text">
                            Color: {dog.color} <br />
                            Weight: {dog.weight} <br />
                            Max Weight: {dog.fullWeight} <br />
                            Sex: {dog.sex} <br />
                            Housetrained: {dog.housetrained === 1 ? "YES" : "NO"} <br />
                            Fixed: {dog.fix === 1 ? "YES" : "NO"} <br />
                            </p>
                            <div class="Middle">
                            <a onClick={() => this.setDog(dog, source)} class="btn btn-secondary">View Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
                )
              })
            }
            </div>
            </div>
          </div>
        </div>
        ) : (
          <div>
                <Navbar />
                <div class="container">
                <div className="Margining">

                    <div class="jumbotron">
                        <div className="Middle">
                            <h1 className="Jumbo-Title">{this.state.dog.name}</h1>
                        </div>
                    </div>

                    <div class="card bg-light">
                        <img class="card-img-long" src={this.state.source} alt="Card image"/>
                        <div class="card-block">
                            <p class="Card-Text">
                            <h1 className="Underlining">Characteristics</h1>
                            Breed: {this.state.dog.breed} <br />
                            Color: {this.state.dog.color} <br />
                            Weight: {this.state.dog.weight} lbs.<br />
                            Max Weight: {this.state.dog.fullWeight} lbs.<br />
                            Sex: {this.state.dog.sex} <br />
                            Housetrained: {this.state.dog.housetrained === 1 ? "YES" : "NO"} <br />
                            Fixed: {this.state.dog.fix === 1 ? "YES" : "NO"} <br />
                            Adoption Fee: $75.00
                            </p>
                            <div class="Middle">
                            <a onClick={() => this.reset()} class="btn btn-secondary">Go Back</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    )
  }
}

ListDogs.propTypes = {
  getPuppies: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  dogs: state.posts.dogs
})

export default connect(mapStateToProps, { getPuppies })(ListDogs)