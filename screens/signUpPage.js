import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

export default class SignUpScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>This is the Sign Up Screen</Text>
            </View>
        );
    }
} 