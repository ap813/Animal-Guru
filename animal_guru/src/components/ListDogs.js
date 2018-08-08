import React, { Component } from 'react'
import Navbar from './Navbar'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {getPuppies} from '../actions/postActions'
import '../styles/listDogs.css'



class ListDogs extends Component {

  constructor(props) {
    super(props)

    this.dateDifference = this.dateDifference.bind(this)
  }

  componentWillMount() {

    // Who let the Dogs out?
    this.props.getPuppies()
  }

  dateDifference() {

  }

  render() {
    return (
      <div>
        <Navbar />
        <div class="container">
          <div className="Margining">

             <div class="jumbotron">
                  <div className="Middle">
                      <h1>Dogs for Adoption</h1>
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
                            <a href="#" class="btn btn-secondary">View Profile</a>
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