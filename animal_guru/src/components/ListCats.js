import React, { Component } from 'react'
import Navbar from './Navbar'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {getKittens} from '../actions/postActions'
import '../styles/listDogs.css'

class ListCats extends Component {

    componentWillMount() {
        // Get the Cats
        this.props.getKittens()
    }

    render() {
        return (
            <div>
                <Navbar />
                <div class="container">
                <div className="Margining">

                <div class="jumbotron">
                    <div className="Middle">
                        <h1>Cats for Adoption</h1>
                    </div>
                </div>

                <div class="row">
                {
                this.props.cats.map( (cat, i) => {
                const source = "http://animalguru.store/cats/" + cat.name + "-" + cat.color + ".jpg"
                return (
                    <div class="col-md-4">
                    <div class="card bg-light">
                        <img class="card-img-top" src={source} alt="Card image cap"/>
                        <div class="card-block">
                            <h2 className="title">{cat.name}</h2>
                            <p class="card-text">
                            Color: {cat.color} <br />
                            Weight: {cat.weight} <br />
                            Max Weight: {cat.fullWeight} <br />
                            Sex: {cat.sex} <br />
                            Housetrained: {cat.housetrained === 1 ? "YES" : "NO"} <br />
                            Fixed: {cat.fix === 1 ? "YES" : "NO"} <br />
                            Declawed: {cat.declawed === 1 ? "YES" : "NO"} <br />
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

ListCats.propTypes = {
    getKittens: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    cats: state.posts.cats
  })

export default connect(mapStateToProps, { getKittens })( ListCats )