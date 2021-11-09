import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>This is the Home Screen</Text>
            </View>
        );
    }
} 