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

class ListCats extends Component {

    // Customize Navigation
    static navigationOptions = {
        drawerLabel: 'Cats',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/cat.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };

    constructor(props) {
        super(props)

        this.state = {
            cat: {},
            cat_image: '',
            modalView: false
        }

        this.setCat = this.setCat.bind(this)
        this.goBack = this.goBack.bind(this)
    }

    setCat(cat, cat_image) {
        this.setState({
            cat,
            cat_image,
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

                        <Text style={styles.title}>Cats</Text>

                        {/* Scroller for Cat Profiles */}
                        <ScrollView style={{flex: 1}}>
                        {
                            /* Map each Cat to a Single Card */
                            this.props.cats.map( (cat, index) => {
                                const cat_image = "http://animalguru.store/cats/" + cat.name + "-" + cat.color + ".jpg"
                                return (
                                    <TouchableOpacity key={index} onPress={() => this.setCat(cat, cat_image)}>
                                        <ImageBackground source={{uri: cat_image}} style={styles.card_image}>
                                            <View style={styles.nameBackground}>
                                                <View style={{backgroundColor: 'white', width: width-20, opacity: 0.8}}>
                                                    <Text style={styles.nameFont}>{cat.name}</Text>
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
                                    <Image style={{resizeMode: 'cover', height: height/3}} source={{uri: this.state.cat_image}} />
                                    <Text style={{fontSize: 36, textAlign: 'center'}}>{this.state.cat.name}</Text>
                                    <Text style={{fontSize: 20, marginLeft: 10}}>
                                        Color: {this.state.cat.color} {'\n'}
                                        Weight: {this.state.cat.weight} {'\n'}
                                        Max Weight: {this.state.cat.fullWeight} {'\n'}
                                        Sex: {this.state.cat.sex} {'\n'}
                                        Housetrained: {this.state.cat.housetrained ? ('YES') : ('NO')} {'\n'}
                                        Fixed: {this.state.cat.fix ? ('YES') : ('NO')} {'\n'}
                                        Declawed: {this.state.cat.declawed ? ('YES') : ('NO')} {'\n'}
                                        Adoption Fee: $50.00
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
        flex: 1,
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
        fontSize: 32,
        textDecorationLine: 'underline',
        textAlign: 'center',
        letterSpacing: 2,
        fontWeight: 'bold'
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
    cats: state.posts.cats
})

export default connect(mapStateToProps, null) (ListCats)
