import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Home from './home';

const fondo = { uri: '../../assets/fondos/fondo2.png' }

const users = [
  {
    name: 'Luis Julian',
    age: 22,
    avgSleepHours: '7:30 hr',
    sleepImprovement: '+18% más que la anterior semana',
    nocturnalMovement: '-5% menos que la anterior semana',
    nocturnalSound: '-13 menos que la anterior semana',
    temperature: 'Normal',
  },
  // Puedes agregar más usuarios aquí si lo deseas
];




export default function Registrarse({ navigation }: any) {
  return (

    <View style={styles.container}>
      <ImageBackground source={fondo} resizeMode="cover" style={styles.image}>

        <View style={styles.tableContainer}>
          {users.map((user, index) => (
            <View key={index} style={styles.userContainer}>
              <Text style={styles.userName}>{user.name}</Text>
              <View style={styles.table}>
                <View style={styles.row}>
                  <Text style={styles.cellTitle}>Edad:</Text>
                  <Text style={styles.cell}>{user.age}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cellTitle}>Promedio de horas de sueño:</Text>
                  <Text style={styles.cell}>{user.avgSleepHours}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cellTitle}>Mejora del sueño:</Text>
                  <Text style={styles.cell}>{user.sleepImprovement}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cellTitle}>Movimiento nocturno:</Text>
                  <Text style={styles.cell}>{user.nocturnalMovement}</Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('menuPrincipal')}
                  style={styles.buttons}
                >
                  <Text style={styles.buttonText}>Regresar</Text>
                </TouchableOpacity>
              </View>
            </View>


          ))}

        </View>
      </ImageBackground>
    </View>
  );


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '20%',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '900',
  },
  tableContainer: {
    marginTop: 20,
    width: '90%',
  },
  userContainer: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for better readability
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  table: {
    borderTopWidth: 1,
    borderTopColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  cellTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  cell: {
    fontSize: 18,
    color: '#fff',
  },
  buttons: {
    padding: 5,
    margin: 15,
    backgroundColor: "#fff",
    width: "25%",
    alignItems: "center",
    borderRadius: 5,
    shadowColor: "black",

  },
  buttonText: {
    // fontFamily: "Arial",
    fontSize: 25
  }
});
