import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native'

export default class Volunteer extends Component {

    static navigationOptions = {
        drawerLabel: 'Volunteer',
        drawerIcon: ({tintColor}) => (
          <Image
            source={require('../assets/v.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <ImageBackground style={styles.background} source={require('../assets/animalBackground.jpg')}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.menuBox} onPress={() => this.props.navigation.openDrawer()}>
                        <Image style={styles.menuIcon} source={require('../assets/bars.png')} />
                    </TouchableOpacity>

                    <View style={{flex: 1}}>
            
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
        backgroundColor: '#ECF0F1',
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
    }
})