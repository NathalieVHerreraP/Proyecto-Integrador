import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, StatusBar, Platform, TouchableOpacity } from 'react-native';
import TimeInput from '@tighten/react-native-time-input';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from 'react-native-elements';
import MyTimePicker from './timePicker'



export default function ConfigDormir( {navigation}: any ) {



const fondo = {uri: '../../assets/fondos/fondo2.png'}
const rel = {uri: '../../assets/images/reloj.png'}



  return (
    <View>
      <ImageBackground source={fondo} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>En base a tu hora de despertar, te recomendamos dormir a esta hora:</Text>

        <Image source={require('../../assets/images/reloj.png')} />

        <TouchableOpacity
        onPress={() =>
          navigation.navigate('menuPrincipal')}
        style={styles.buttons}
        
        >
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>



      
      </ImageBackground>

      

     


    </View>
  );
}

const styles = StyleSheet.create({
  main:{
  },
  image:{
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    paddingVertical: "10%"
  },
  title:{
    fontSize: 30,
    color: "#fff",
    fontWeight: '900',
  }, 
  buttons:{
    padding: 5,
    margin: 15,
    backgroundColor: "#fff",
    width: "25%",
    alignItems: "center",
    borderRadius: 5,
    shadowColor: "black",
    

  },  
 
  buttonText:{
    // fontFamily: "Arial",
    fontSize: 25
  },
});