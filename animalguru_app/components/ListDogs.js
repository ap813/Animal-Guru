import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native'

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
    }

    componentWillMount() {
        this.props.navigation.openDrawer();
    }

    render() {
        return (
        <View>
            <Text>List the Dogs</Text>
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

export default ListDogs
