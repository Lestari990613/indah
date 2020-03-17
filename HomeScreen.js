import * as React from 'react';
import { Images,  StyleSheet, Text,TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';

import backgroundImages from '../images/background.jpg';
import { render } from 'react-dom';

  export default function HomeScreen() {
    
    return (
        <ImageBackground source={backgroundImages} style={styles.backgroundContainer}>
        <View style={styles.inputView} >
            <TextInput  
                style={styles.inputText}
                placeholder="Username" 
                placeholderTextColor="#003f5c"
                />
        </View>
        <View style={styles.inputView} >
            <TextInput  
                style={styles.inputText}
                placeholder="Password" 
                placeholderTextColor="#003f5c"
                />
        </View>
    
        <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        
       </ImageBackground>
    );
}


const styles = StyleSheet.create({
  
  backgroundContainer:{
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView:{
    width:"30%",
    backgroundColor:"#EE82EE",
    borderRadius:25,
    height:10,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:30,
    color:"black" 
  },
  loginBtn:{
    width:"30%",
    backgroundColor:"#00FFFF",
    borderRadius:25,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
});