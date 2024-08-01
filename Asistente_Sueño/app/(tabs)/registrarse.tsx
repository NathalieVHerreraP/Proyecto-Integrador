import { Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity, View, Text, SectionList,  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, ListItem } from 'react-native-elements';
import ConfigAlarms from './configAlarmas';
import React from 'react';


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





export default function Registrarse( {navigation}: any) {
  return (
    <View>
    <ImageBackground source={fondo} resizeMode="cover" style={styles.image}>
      <Text style={styles.title}>Registrarme</Text>

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
        placeholder='Ingresa tu usuario'
        inputMode='text'
        leftIcon={
          <Icon
            name='user'
            size={24}
            color='white'
          />
        }
      />


      <Input
        style={styles.input}
        placeholder='Ingresa tu edad'
        inputMode='numeric'
        leftIcon={
          <Icon
            name='eye'
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



      {/* <TextInput 
      style={styles.input} 
      // onChangeText={onChangeText}
      // value={text}
      placeholder='Correo electrónico'
      keyboardType='email-address'
      
      ></TextInput>
      
      <TextInput 
      style={styles.input} 
      // onChangeText={onChangeText}
      // value={text}
      placeholder='Nombre de usuario'
      keyboardType='default'

      
      ></TextInput>
      
      <TextInput 
      style={styles.input} 
      // onChangeText={onChangeText}
      // value={text}
      placeholder='Edad'
      keyboardType='numeric'
      ></TextInput>

      <TextInput 
      style={styles.input} 
      // onChangeText={onChangeText}
      // value={text}
      placeholder='Contraseña'
      keyboardType='visible-password'
      ></TextInput> */}

{/* aquí irá un componente para poder añadir un select list para elgur la musica */}

{/* 
      <SectionList
        renderItem={({item}) => <ListItem title={item.title} />}
        renderSectionHeader={({section}) => <H1 title={section.key} />}
        sections={[ // homogeneous rendering between sections
          {data: [...], key: ...},
          {data: [...], key: ...},
          {data: [...], key: ...},
        ]}
      />
       */}



      <TouchableOpacity
      onPress={() =>
        navigation.navigate('iniciarSesion')}
      style={styles.buttons}
      
      >
        <Text style={styles.buttonText}>Registrar</Text>

      </TouchableOpacity>

    </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  image:{
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    paddingVertical: "8%"
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