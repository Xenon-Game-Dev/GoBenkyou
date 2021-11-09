import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { requestPermissionsAsync } from 'expo-barcode-scanner';

export default class HelpScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>This is the Help/Info Screen</Text>
            </View>
        );
    }
} 