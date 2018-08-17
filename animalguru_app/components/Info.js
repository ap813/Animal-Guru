import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    ImageBackground
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

    render() {
        return (
            <ImageBackground style={styles.background} source={require('../assets/animalBackground.jpg')}>
                <View style={styles.container}>
                    {/* Menu Toggler */}
                    <TouchableOpacity style={styles.menuBox} onPress={() => this.props.navigation.openDrawer()}>
                        <Image style={styles.menuIcon} source={require('../assets/bars.png')} />
                    </TouchableOpacity>

                    <Text style={styles.title}>About Us</Text>

                    {/* Where all the info goes */}
                    <ScrollView style={styles.body}>
                        <Text style={styles.paragraph}>
                        {'\t'}Animal Guru started in 2016 as a no-kill shelter.
                        We have proudly hosted hundreds of cats and dogs 
                        in the Orlando area. 
                        </Text>
                        <Text style={styles.paragraph}>
                        {'\t'}The community has always helped us and we always
                        look for ways to give back. Currently, our foundation 
                        is striving to build a new dog park next door to our location.
                        The park will be open to all and will serve as place where our dogs
                        can go interact with other dogs in community. 
                        </Text>
                        <Text style={styles.paragraph}>
                        {'\t'}We are always seeking volunteers to lend a hand with
                        managing our animals. Please swing by our take a look at our
                        Volunteer page inside of this app on how to get involved.
                        </Text>
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
    },
    title: {
        fontSize: 30,
        textDecorationLine: 'underline',
        textAlign: 'center',
        letterSpacing: 1,
        fontWeight: 'bold'
    },
    body: {
        marginHorizontal: 20,
        marginTop: 10
    },
    paragraph: {
        fontSize: 20,
        marginTop: 20
    }
})

export default Info