import React, { Component } from 'react'
import Navbar from './Navbar'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {getKittens} from '../actions/postActions'
import '../styles/listDogs.css'

class ListCats extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cat: {},
            source: '',
            list: true
        }

        this.setCat = this.setCat.bind(this)
        this.reset = this.reset.bind(this)
    }

    componentWillMount() {
        // Get the Cats
        this.props.getKittens()
    }

    setCat(cat, source) {
        this.setState({
            cat,
            source,
            list: false
        })
    }

    reset() {
        this.setState({
            cat: {},
            source: '',
            list: true
        })
    }

    render() {

        return(
        this.state.list ? (
            <div>
                <Navbar />
                <div class="container">
                <div className="Margining">

                <div class="jumbotron">
                    <div className="Middle">
                        <h1 className="Jumbo-Title">Cats for Adoption</h1>
                    </div>
                </div>

                <div class="row">
                {
                this.props.cats.map( (cat, i) => {
                const source = "http://animalguru.store/cats/" + cat.name + "-" + cat.color + ".jpg"
                return (
                    <div key={i} class="col-md-4">
                    <div class="card bg-light">
                        <img class="card-img-top" src={source} alt="Card image cap"/>
                        <div class="card-block">
                            <h2 className="title">{cat.name}</h2>
                            <p class="card-text">
                            Color: {cat.color} <br />
                            Weight: {cat.weight} lbs.<br />
                            Max Weight: {cat.fullWeight} lbs.<br />
                            Sex: {cat.sex} <br />
                            Housetrained: {cat.housetrained === 1 ? "YES" : "NO"} <br />
                            Fixed: {cat.fix === 1 ? "YES" : "NO"} <br />
                            Declawed: {cat.declawed === 1 ? "YES" : "NO"} <br />
                            </p>
                            <div class="Middle">
                            <a onClick={() => this.setCat(cat, source)} class="btn btn-secondary">View Profile</a>
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
                            <h1 className="Jumbo-Title">{this.state.cat.name}</h1>
                        </div>
                    </div>

                    <div class="card bg-light">
                        <img class="card-img-long" src={this.state.source} alt="Card image"/>
                        <div class="card-block">
                            <p class="Card-Text">
                            <h1 className="Underlining">Characteristics</h1>
                            Color: {this.state.cat.color} <br />
                            Weight: {this.state.cat.weight} lbs.<br />
                            Max Weight: {this.state.cat.fullWeight} lbs.<br />
                            Sex: {this.state.cat.sex} <br />
                            Housetrained: {this.state.cat.housetrained === 1 ? "YES" : "NO"} <br />
                            Fixed: {this.state.cat.fix === 1 ? "YES" : "NO"} <br />
                            Declawed: {this.state.cat.declawed === 1 ? "YES" : "NO"} <br />
                            Adoption Fee: $50.00
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

ListCats.propTypes = {
    getKittens: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    cats: state.posts.cats
  })

export default connect(mapStateToProps, { getKittens })( ListCats )