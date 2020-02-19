//------ App.js

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Router from './src/Router';

export default class App extends Component {
  render() {
    return (
        <Router/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

//-------------Router.js
 //         ./src/Router

import {createStackNavigator } from 'react-navigation-stack';
import{createAppContainer} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';


const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Detail: DetailScreen
}, {
    initialRouteName: "Home",
    headerLayoutPreset: "center",
    defaultNavigationOptions:{
        headerBackTitle:null,
        headerTintColor:'#0000',
        headerTitleStyle: {
            fontWeight: 'bold'
        }

    },
});

export default createAppContainer(AppNavigator);

//-----------HomeScreen.js
//           ./screens/HomeScreen

import {Component} from "react";
import {StyleSheet, Text, View,Button,Image,TouchableOpacity} from "react-native";
import React from "react";

class TitleLogo extends Component{
    render(){
     return(
         <Image
             style={{width:38,height:38}}
             source={require('../assets/limon.jpg')}/>
     )
    }
};

export default class HomeScreen extends Component {
    static navigationOptions={
      headerTitle: <TitleLogo/>,
        //  title:'Home',
        headerTransparent:true,
        headerRight:(
            <TouchableOpacity style={{marginRight:10}} onPress={() => alert('Button works')} title="Right">
                <Text>Button</Text>
            </TouchableOpacity>
        )
    };
    render() {
        const {navigate}=this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.yazi}>Anasayfa</Text>
                <Button
                        title="Sayfa1"
                        onPress={() => navigate ('Detail',{title:'Sayfa-1'})}/>
                <Button
                    title="Sayfa2"
                    onPress={() => navigate ('Detail',{title:'Sayfa-2'})}/>
                <Button
                    title="Sayfa3"
                    onPress={() => navigate ('Detail',{title:'Sayfa-3'})}/>
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
    yazi:{
        fontSize:30
    }
});


//---------------- DetailScreen.js
//                 ./screens/DetailScreen

import {Component} from "react";
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from "react";

export default class DetailScreen extends Component {
    static navigationOptions = ({navigation})=>{
        return{
            title:navigation.getParam('title','Detail'),
            headerStyle:{
                backgroundColor: 'yellow'
            },
            headerRight:(
                <TouchableOpacity style={{marginRight:10}} onPress={() => alert('Button works')} title="Right">
                    <Text>Button</Text>
                </TouchableOpacity>
            )
        }

    };
    render() {
        const {navigate,goBack,push,getParam}=this.props.navigation;
        const title=getParam('title');
        return (
            <View style={styles.container}>
                <Text style={styles.yazi}>{title}</Text>
                <Button
                    title="anasayfa"
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
    yazi:{
        fontSize:30
    }
});
