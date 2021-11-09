import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createSwitchNavigator,} from 'react-navigation';


import HomeScreen from './screens/homeScreen';

export default class App extends React.Component {
  render(){
    return (
      <HomeScreen/>
    );
  }
}

/*
const switchAppNavigator = createSwitchNavigator({
  HomeScreen: {screen: HomeScreen}, 
})


const AppContainer =  createAppContainer(switchNavigator);
*/