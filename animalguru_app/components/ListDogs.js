import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    ImageBackground,
    Modal
} from 'react-native'
import { connect } from 'react-redux'

const {height, width} = Dimensions.get('window')

class ListDogs extends Component {

    static navigationOptions = {
        drawerLabel: 'Dogs',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/dog.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };

    constructor(props) {
        super(props)

        this.state = {
            dog: {},
            dog_image: '',
            modalView: false
        }

        this.setDog = this.setDog.bind(this)
        this.goBack = this.goBack.bind(this)
    }

    setDog(dog, dog_image) {
        this.setState({
            dog,
            dog_image,
            modalView: true
        })
    }

    goBack() {
        this.setState({
            modalView: false
        })
    }

    render() {
        return (

            <ImageBackground style={styles.background} source={require('../assets/animalBackground.jpg')}>
            <View style={styles.container}>
                {/* Menu Navigator Icon*/}
                <TouchableOpacity style={styles.menuBox} onPress={() => this.props.navigation.openDrawer()}>
                    <Image style={styles.menuIcon} source={require('../assets/bars.png')} />
                </TouchableOpacity>

                <Text style={styles.title}>Dogs</Text>

                {/* Scroller for Cat Profiles */}
                <ScrollView style={{flex: 1}}>
                {
                    /* Map each Cat to a Single Card */
                    this.props.dogs.map( (dog, index) => {
                        const dog_image = "http://animalguru.store/dogs/" + dog.breed + "-" + dog.name + ".jpg"
                        return (
                            <TouchableOpacity key={index} onPress={() => this.setDog(dog, dog_image)}>
                                <ImageBackground source={{uri: dog_image}} style={styles.card_image}>
                                    <View style={styles.nameBackground}>
                                        <View style={{backgroundColor: 'white', width: width-20, opacity: 0.8}}>
                                            <Text style={styles.nameFont}>{dog.name}</Text>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        )
                    })
                }

                <Modal 
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalView}
                    onRequestClose={() => {}}>
                    <View style={styles.container}>
                        {/* Menu Navigator Icon*/}
                        <TouchableOpacity style={styles.menuBox} onPress={() => this.goBack()}>
                            <Image style={styles.menuIcon} source={require('../assets/close.png')} />
                        </TouchableOpacity>

                        <View style={styles.card}>
                            <Image style={{resizeMode: 'cover', height: height/3}} source={{uri: this.state.dog_image}} />
                            <Text style={{fontSize: 36, textAlign: 'center'}}>{this.state.dog.name}</Text>
                            <Text style={{fontSize: 20, marginLeft: 10}}>
                                Breed: {this.state.dog.breed} {'\n'}
                                Color: {this.state.dog.color} {'\n'}
                                Weight: {this.state.dog.weight} {'\n'}
                                Max Weight: {this.state.dog.fullWeight} {'\n'}
                                Sex: {this.state.dog.sex} {'\n'}
                                Housetrained: {this.state.dog.housetrained ? ('YES') : ('NO')} {'\n'}
                                Fixed: {this.state.dog.fix ? ('YES') : ('NO')} {'\n'}
                                Adoption Fee: $75.00
                            </Text>
                        </View>
                    </View>
                </Modal>
                </ScrollView>
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
        flex: 1
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
    title: {
        fontSize: 42,
        textDecorationLine: 'underline',
        textAlign: 'center',
        letterSpacing: 2,
        marginBottom: 5
    },
    card: {
        width: width-20,
        height: height/1.2,
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 10
    },
    card_image: {
        width: width-20,
        height: height/3,
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 10,
        opacity: 1.3
    },
    nameBackground: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    nameFont: {
        fontSize: 23,
        textAlign: 'center'
    }
})

const mapStateToProps = state => ({
    dogs: state.posts.dogs
})

export default connect(mapStateToProps, null) (ListDogs)
