import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    ImageBackground
} from 'react-native'
import { createDrawerNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import ListDogs from './ListDogs'
import ListCats from './ListCats'
import Info from './Info'


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
  Info: {
    screen: Info
  },
});

export default Root
