# react-native-flat-login
React Native Flat Login Component

# Example Video
https://youtu.be/aOkyIiOT6NE

# Usage
npm i react-native-flat-login --save

```javascript

import React, {Component} from 'react';
import {StyleSheet,KeyboardAvoidingView} from 'react-native';

import FlatLogin from 'react-native-flat-login';

export default class App extends Component {
  render() {
    return (
   <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <FlatLogin
        colorSet={["#fAfAfA","#77A7DF","#5391D8", "#5391D8"]}
        placeHolders={["ENTER YOUR EMAIL HERE","ENTER YOUR PASSWORD HERE","REPEAT YOUR PASSWORD HERE"]}
        titleTxt="SING UP"
        titleStyle={{marginTop:20, marginLeft:20, fontSize:20, fontWeight:'800', color:'#000'}}
        noteTxt="Fill in all information"
        noteStyle={{ fontSize:12, marginLeft:20,fontSize:14,letterSpacing:1,color:"#999"}}
        buttomText="GO"
        spinnerColor="#80B4E1"
        inputTextStyle={{flex:1, width:'100%',paddingLeft:30,paddingTop:10,color:'#80B4E1'}}
        onSubmit={(data)=> {console.log(data)}} />     
  </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#f5f5f5'
  },
});
 
 ```
 # Props
 | Prop|Defaul value|Type|Description|
 | ---      | ---       | ---      | ---       |
| colorSet|["#fAfAfA","#77A7DF","#5391D8", "#5391D8"]|Array|Set component colors|
| placeHolders|["ENTER YOUR EMAIL HERE","ENTER YOUR PASSWORD HERE","REPEAT YOUR PASSWORD HERE"]|Array|Define placeholder for each TextInput|
| titleTxt| "SING UP" |String|Tittle text|
| titleStyle|{marginTop:20, marginLeft:20, fontSize:20, fontWeight:'800', color:'#000'}|Object|Styles for title text|
| noteTxt|"Fill in all information"|Stirng|Note text next to Title text|
| noteStyle|{ fontSize:12, marginLeft:20,fontSize:14,letterSpacing:1,color:"#999"}|Object|Styles for note text|
| buttomText| "GO" |String|Text for Submit buttom|
| spinnerColor| "#80B4E1" |String|Define a color for an ActivityIndicator component|
| inputTextStyle|{flex:1, width:'100%',paddingLeft:30,paddingTop:10,color:'#80B4E1'}|Object|Styles for TextInput components|
| onSubmit| {(data)=> null} |Function| Submit buttom responder|

# Methods
| Name |Description| Usage |
| ---      | ---       | ---      | 
| reLoad() |Ruturn component to its original shape|this.refs.refname.reLoad()|



# Contact

Twitter: @holaconstancio
