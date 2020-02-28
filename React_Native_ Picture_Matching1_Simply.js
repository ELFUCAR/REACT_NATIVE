import React, {Component} from 'react';
import {StyleSheet, View,Image,Text,Button,TouchableOpacity,Alert} from 'react-native';

import f1 from './src/screens/1.jpg';
import f2 from './src/screens/2.jpg';
import f3 from './src/screens/3.jpg';
import f4 from './src/screens/4.jpg';
import f5 from './src/screens/5.jpg';
import f6 from './src/screens/6.jpg';
import f7 from './src/screens/7.jpg';
import f8 from './src/screens/8.jpg';
import f9 from './src/screens/9.jpg';
import f10 from './src/screens/10.jpg';

export const arrayPhoto = [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10];

export default class App extends Component {
    first_photo=(item1,bigPhoto)=>{
        if(item1==bigPhoto)
        {
            Alert.alert('correct','CORRECT!!!');
        }
        else{
            Alert.alert('wrong','WRONG, TRY AGAIN...');
        }
    };

    second_photo=(item2,bigPhoto)=>{

        if(item2==bigPhoto)
        {
            Alert.alert('correct','CORRECT!!!');
        }
        else{
            Alert.alert('wrong','WRONG, TRY AGAIN...');
        }

    };

    third_photo=(item3,bigPhoto)=>{

        if(item3==bigPhoto)
        {
            Alert.alert('correct','CORRECT!!!');
        }
        else{
            Alert.alert('wrong','WRONG, TRY AGAIN...');
        }

    };

    render()
    {
      //  const arrayPhoto = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10];
        var random;
        const myloop = [];
        const Loop = [];
        const photo1 = [];
        const photo2 = [];
        const photo3 = [];

        for (var i = 0; i < 3; i++) {
            random = Math.floor(Math.random() * 10);
            myloop[i] = arrayPhoto[random];
        }
        photo1[0] = myloop[0];
        photo2[0] = myloop[1];
        photo3[0] = myloop[2];

        random = Math.floor(Math.random() * 3);
        Loop[0]=myloop[random];
        const bigPhoto=Loop[0];


        return (

            <View style={styles.container}>

                <View style={styles.big_image}><View>
                    <Button style={styles._button } title={"Start"} ></Button>
                </View>
                    <View style={styles.big_foto}>
                        {Loop.map((item,key)=>
                        <Image key={key} style={{height:400  , width:390}} source={item} />)}
                    </View>
                </View>


                <View style={styles.small_image}>
                    {photo1.map((item1,key)=>
                    <TouchableOpacity onPress={this.first_photo.bind(this,item1,bigPhoto)}>
                        <View style={styles.foto}>
                            <Image style={{height:128  , width:128}} source={item1} />
                        </View>
                    </TouchableOpacity>)}


                    {photo2.map((item2,key)=>
                    <TouchableOpacity onPress={this.second_photo.bind(this,item2,bigPhoto)}>
                        <View style={styles.foto}>
                            <Image style={{height:128  , width:128}} source={item2} />
                        </View>
                    </TouchableOpacity>)}


                    {photo3.map((item3,key)=>
                    <TouchableOpacity onPress={this.third_photo.bind(this,item3,bigPhoto)} >
                        <View style={styles.foto}>
                            <Image style={{height:128  , width:128}} source={item3} />
                        </View>
                    </TouchableOpacity>)}
                </View>

            </View>

        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        // justifyContent:'center',
        alignItems:'center'
    },

    big_image:{
        flex:9,
        backgroundColor:'orange',
        width:390,
        height:390,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:'orange'
    },

    small_image:{
        flex:2,
        flexDirection:'row',
        justifyContent:'space-around',
        //alignItems:'space-around',
        borderWidth:2,
        borderColor:'orange',
        height: 250
    },

    foto: {
        justifyContent: 'center',
        alignItems:'stretch',
        backgroundColor:'green',
        height: 128,
        width:128,
        borderWidth:2,
        borderColor:'orange'
    },
    big_foto:{
        justifyContent: 'center',
        alignItems:'stretch',
        backgroundColor:'green',
        height: 400,
        width:390,
        borderWidth:2,
        borderColor:'orange'
    },
    _button:{
        flexDirection:'row',
        // justifyContent:'center',
        alignItems:'flex-end'
    }


});
