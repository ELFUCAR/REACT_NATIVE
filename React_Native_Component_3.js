//---------- App.js

import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import FlatListExample from './src/components/FlatListExample';

export default class App extends Component {
  render() {
      return (
          <SafeAreaView style={styles.container}>
              <FlatListExample></FlatListExample>
          </SafeAreaView>


      );
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    }

});



//--------  data.js

export default [
    {
        "_id":"5c52de4c0f4ed2ae",
        "picture":"./src/assets/yildiz.jpg",
        "company":"Arnios1",
        "name":"Elif Uçar"
    },
    {
        "_id":"5c52de4c0sgs<fgf4ed2ae",
        "picture":"./src/assets/yildiz.jpg",
        "company":"Arnios2",
        "name":"Dilvin Bahadır"
    },
    {
        "_id":"5c52de4zdfhahc0f4" ,
        "picture":"./src/assets/yildiz.jpg",
        "company":"Arnios3",
        "name":"Hilal Eraslan"
    },
    {
        "_id":"5c52de4cdzfhz0f4",
        "picture":"./src/assets/yildiz.jpg",
        "company":"Arnios",
        "name":"Yağmur Koç"
    },
    {
        "_id":"5c52de4zdfghzc0f4",
        "picture":"./src/assets/yildiz.jpg",
        "company":"Arnios4",
        "name":"Nursel Deniz"
    }
)

//-----------   FlatListExample.js

//  './src/components/FlatListExample';



import React, {Component} from 'react';
import {StyleSheet ,SafeAreaView, View,Text,FlatList,Image,TouchableOpacity,TextInput} from 'react-native';
import data from '../../data';
export default class FlatListExample extends Component {
    state={
      text:'',
        contacts:data
    };

    renderContactsItem = ({item,index}) => {
        return(
            <TouchableOpacity style={styles.itemContainer,{backgroundColor: index % 2===1 ? '#feee': ''}}>
                <Image
                    style={styles.avatar}
                    source={{uri:item.picture}}/>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text>{item.company}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    searchFilter=text=>{
        const newData=data.filter( item =>{
            const  listItem= '${item.name.toLowerCase()} ${item.company.toLowerCase()}';
               return listItem.indexOf(text.toLowerCase())>-1;
        });

this.setState({
    contacts:newData,
});
    };


    renderHeader=()=>{
        const {text}=this.state;
        return(
            <View style={styles.searchContainer}>
                <TextInput onChangeText={text=> {
                    this.setState({text,
                    });
                    this.searchFilter(text);
                }}
                           value={text}
                           placeholder='Search...' style={styles.searchInput}/>
            </View>
        )
    }

    render() {
        return (
                <FlatList
                    ListHeaderComponent={this.renderHeader()}
                    renderItem={this.renderContactsItem}
                    keyExtractor={(item)=>item._id}
                    data={this.state.contacts}/>
        );
    }
}
const styles = StyleSheet.create({
    itemContainer:{
        flex:1,
        flexDirection:'row',
        paddingVertical:10,
        borderBottomWidth:1,
        borderBottomColor:'#eee'
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:25,
        marginHorizontal:10
    },
    textContainer:{
        justifyContent:'space-around'
    },
    name:{
        fontSize:16
    },
    searchInput:{
        fontSize:16,
        backgroundColor:'#f9f9f9'
    },
    searchContainer:{
        padding:10
    }
});
