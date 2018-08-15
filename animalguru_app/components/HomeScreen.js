import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {getPuppies, getKittens} from '../actions/postActions'

class HomeScreen extends Component {

    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/home.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };

    constructor(props) {
        super(props)
    }

    // Grab the Cats and Dogs
    componentDidMount() {
        // Cats
        this.props.getKittens()
        // Dogs
        this.props.getPuppies()
    }

    render() {
        return (
            <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
                <View style={styles.container}>
                        <TouchableOpacity style={styles.menuBox} onPress={() => this.props.navigation.openDrawer()}>
                            <Image style={styles.menuIcon} source={require('../assets/bars.png')} />
                        </TouchableOpacity>

                        <View style={{flex: 0.8, alignItems: 'center', opacity: 0.9, marginHorizontal: 10}}>
                            <Text style={{fontSize: 40, textDecorationLine: 'underline', marginTop: 20, marginBottom: 10, color: 'black'}}>Animal Guru</Text>
                            <Text style={{fontSize: 20, marginTop: 10, marginHorizontal: 15, color: 'black'}}>
                                Welcome to Animal Guru, we're a no kill shelter that houses
                                cats and dogs. Take a look around and see if you find any new
                                friends.
                            </Text>
                        </View>
                </View>
        
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#77F4C3',
        opacity: 0.8
    },
    icon: {
        width: 20,
        height: 20
    },
    menuIcon:{
        width: 40,
        height: 40
    },
    menuBox: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

})

// Map The Props to the State
HomeScreen.propTypes = {
    getPuppies: PropTypes.func.isRequired,
    getKittens: PropTypes.func.isRequired
}
  
const mapStateToProps = state => ({
    dogs: state.posts.dogs,
    cats: state.posts.cats
})

export default connect(mapStateToProps, { getPuppies, getKittens })(HomeScreen)