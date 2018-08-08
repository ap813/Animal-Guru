import React, { Component } from 'react'
import Navbar from './Navbar'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {getKittens} from '../actions/postActions'

class ListCats extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        // Get the Cats
        this.props.getKittens()
    }

    render() {
        return (
            <div>
                <Navbar />
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