//---------------- App.js

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createStackNavigator } from 'react-navigation-stack';
import{createAppContainer} from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

export default class App extends Component {
  render() {
    return (
        <AppContainer/>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen
}, {
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

//---------------- DetailScreen.js

import {Component} from "react";
import {Button, StyleSheet, Text, View} from 'react-native';
import React from "react";

export default class DetailScreen extends Component {
    render() {
        const {navigate,goBack,push}=this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.yazi}>'2.Sayfa'</Text>
                <Button style={styles.Dbut}
                    title="anasayfaya git"
                    onPress={() => navigate ('Home')}/>
                <Button
                title="geri dön"
                onPress={() => goBack()}/>
                <Button
                    title="ileri"
                    onPress={() => push('Detail')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    Dbut:{
    },
    yazi:{
        fontSize:30
    }
});

//-----------------  HomeScreen.js

import {Component} from "react";
import {StyleSheet, Text, View,Button} from "react-native";
import React from "react";

export default class HomeScreen extends Component {
    render() {
        const {navigate}=this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.yazi}>Anasayfa</Text>
                <Button style={styles.Dbut}
                    title="git"
                    onPress={() => navigate ('Detail')}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    Dbut:{
    },
    yazi:{
        fontSize:30
    }
});
