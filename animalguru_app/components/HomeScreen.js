import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native'

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

    componentWillMount() {
        this.props.navigation.openDrawer();
    }

    render() {
        return (
        <View>
            <Text>Home Screen</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20
    }
})

export default HomeScreen