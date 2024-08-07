import { Button, Image, ImageBackground, StyleSheet, View, Text, Touchable, TouchableOpacity } from 'react-native';
import IniciarSesion from './iniciarSesion';
import Registrarse from './registrarse';

// const fondo = {uri: '../../assets/fondos/fondo_noche.jpeg'}
const fondo = {uri: '../../assets/fondos/fondo_noche.jpeg'}

export default function Home( {navigation}: any) {
  return (
    <View>
      <ImageBackground source={fondo} resizeMode="cover" style={styles.image}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('usuarios')}
        style={styles.buttons}
        
        >

<Text style={styles.buttonText}>usuarios</Text>

</TouchableOpacity>
        <TouchableOpacity
        onPress={() =>
          navigation.navigate('iniciarSesion')}
        style={styles.buttons}
        
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>

        </TouchableOpacity>
        <TouchableOpacity
        onPress={() =>
          navigation.navigate('registrarse')}
        style={styles.buttons}
        
        >
          <Text style={styles.buttonText}>Registrarme</Text>

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
  mainView:{
    alignItems: "center"
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