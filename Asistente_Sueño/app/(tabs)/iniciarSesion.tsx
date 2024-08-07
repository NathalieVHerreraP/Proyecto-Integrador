import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import ConfigAlarms from './configAlarmas';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import FormInput from './formInput';



const fondo = {uri: '../../assets/fondos/fondo2.png'}

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
   // more items
]

  // const [text, onChangeText] = useState('');

export default function IniciarSesion( {navigation}: any) {

 


  return (
    <View>
      <ImageBackground source={fondo} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Iniciar Sesión</Text>


        <Input
          style={styles.input}
          placeholder='Ingresa tu correo electrónico'
          inputMode='email'
          leftIcon={
            <Icon
              name='wechat'
              size={24}
              color='white'
            />
          }
        />

        <Input
          style={styles.input}
          placeholder='Ingresa tu contraseña'
          inputMode='text'
          leftIcon={
            <Icon
              name='key'
              size={24}
              color='white'
            />
          }
        />
        
        <TouchableOpacity
        onPress={() =>
          navigation.navigate('configAlarmas')}
        style={styles.buttons}
        
        >
          <Text style={styles.buttonText}>Acceder</Text>

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
    paddingVertical: "15%"
  },
  input:{
    color: "#fff",
    // fontFamily: "Arial",
    fontSize: 25,
    padding: 5,
    margin: 15,
    width: "25%",
    borderRadius: 5,
    borderColor: "#fff",
    backgroundColor:"#3c6575"
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
  }
});