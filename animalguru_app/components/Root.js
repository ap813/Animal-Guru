import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPuppies } from '../actions/postActions'

class Root extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    // Who let the Dogs out?
    this.props.getPuppies()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
            React + Redux
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

Root.propTypes = {
  getPuppies: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  dogs: state.posts.dogs
})

export default connect(mapStateToProps, { getPuppies })(Root)
