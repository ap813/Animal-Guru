import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

class Info extends Component {

    static navigationOptions = {
        drawerLabel: 'Info',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/info.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };

    constructor(props) {
        super(props)
    }

    componentWillMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.menuBox} onPress={() => this.props.navigation.openDrawer()}>
                    <Image style={styles.menuIcon} source={require('../assets/bars.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4B98C7'
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

export default Info