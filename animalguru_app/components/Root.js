import {
    Dimensions
} from 'react-native'
import { createDrawerNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import ListDogs from './ListDogs'
import ListCats from './ListCats'
import Info from './Info'
import Volunteer from './Volunteer'

const {width} = Dimensions.get('window')


const Root = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Cats: {
    screen: ListCats
  },
  Dogs: {
    screen: ListDogs
  },
  Volunteer: {
    screen: Volunteer
  },
  Info: {
    screen: Info
  },
},
{
  contentOptions: {
    activeTintColor: 'black',
    activeBackgroundColor: 'transparent',
    inactiveTintColor: 'white',
    inactiveBackgroundColor: 'transparent',
    labelStyle: {
      fontSize: 20,
      marginLeft: 10,
    },
  },
  drawerWidth: width * 0.7,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  drawerBackgroundColor: "grey"
}
);

export default Root
