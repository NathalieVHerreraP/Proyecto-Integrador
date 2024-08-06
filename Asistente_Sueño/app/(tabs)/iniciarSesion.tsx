import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';



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
]


export default function IniciarSesion( {navigation}: any) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

 const handleSession = () => {
  navigation.navigate('iniciarSesionProceso', {userEmail: userEmail, userPassword: userPassword})
 }


  return (
    <View>
      <ImageBackground source={fondo} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <Input
          style={styles.input}
          placeholder='Ingresa tu correo electrónico'
          inputMode='email'
          value= {userEmail}
          onChangeText={text => setUserEmail(text)}
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
          value= {userPassword}
          onChangeText={text => setUserPassword(text)}
          leftIcon={
            <Icon
              name='key'
              size={24}
              color='white'
            />
          }
        />
        
        <TouchableOpacity
        onPress={handleSession}
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
    paddingVertical: "20%"
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