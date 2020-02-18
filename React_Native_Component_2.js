import React, {Component} from 'react';
import {StyleSheet, Text, View, Button,TextInput } from 'react-native';

const styles = StyleSheet.create({
        container:{
        paddingTop:33,
      backgroundColor: '#FFEB3B',
        flex:1,
            flexDirection:'column',
          //  justifyContent:'center',
            alignItems:'center'
    },

    textinput1:{
            height:40,
        padding:10
    },
    box2:{
        backgroundColor:'green',
        width:200,
        height:200,
        borderWidth:5,
        borderColor:'#aaa',
        justifyContent:'center',
        alignItems:'center'
    },
    box3:{
        backgroundColor:'gray',
        width:200,
        height:100,
        borderWidth:5,
        borderColor:'#aaa',

    },
    buttons:{
      flexDirection: 'row',
        backgroundColor:'blue'
    },
    number1:{
        height:44,
        padding:10
    }
});

export default class LotsOfStyles extends Component {
    state = {
        number:0
    };
  
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    onPressIncrease = () => {
        this.setState({
        number: ++this.state.number,

        });
    };
    onPressDecrease = () => {
     this.setState({
        number : --this.state.number,
     });
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box2}>
                <TextInput
                        style={styles.textinput1}
                        placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <Text style={{padding: 10, fontSize: 20}}>
                        {this.state.text.split(' ').map((word) => word && 'aranıyor...').join(' ')}
                    </Text>             
               
                <View style={styles.box3}>
                    <Text style={styles.number1}>{this.state.number}</Text>
                </View>
                <View style={styles.buttons}>
                    <Button title='increase' color='#111' onPress={this.onPressIncrease}/>
                    <Button title='decrease' color='#111' onPress={this.onPressDecrease}/>
                </View >
           
            </View>

        );
    }
}

