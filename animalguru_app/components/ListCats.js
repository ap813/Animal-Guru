import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native'

class ListCats extends Component {

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
    }

    componentWillMount() {
        this.props.navigation.openDrawer();
    }

    render() {
        return (
        <View>
            <Text>List the Cats</Text>
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

export default ListCats
