import React, {Component} from 'react';
import {StyleSheet, Text, Image,Button } from 'react-native';

const styles = StyleSheet.create({
        container:{
        paddingTop:33,
      backgroundColor: '#FFEB3B',
        flex:1,
            flexDirection:'column',
          //  justifyContent:'center',
            alignItems:'center'
    },
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20,
    },
    red: {
        color: 'red',
    },
 
    box2:{
        backgroundColor:'green',
        width:200,
        height:200,
        borderWidth:5,
        borderColor:'#aaa',
        justifyContent:'center',
        alignItems:'center'
    } 
});

export default class LotsOfStyles extends Component {
//Buton
    onPressDetail=()=>{
        alert('Detail');
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box2}>
                
                <Button title='Button' color='#111' onPress={this.onPressDetail}/>
                </View>
                <View style={styles.box1}>
                <Text style={styles.red}>red</Text>
                <Text style={styles.bigblue}>bigBlue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigBlue,then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigBlue</Text>
            </View>
              <Image source={require('./src/assets/yildiz.jpg')}/>
            </View>
        );
    }
}
