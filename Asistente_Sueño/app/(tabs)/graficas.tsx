import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
import GraficaSonido from '@/components/graficaSonido';
import GraficaMovimiento from "@/components/graficaMovimiento";
import GraficaTemperatura from "@/components/graficaTemperatura";

const fondo = { uri: '../../assets/fondos/fondo_noche.jpeg' }
export default function Graficas({ navigation }: any) {
  return (
    <ImageBackground source={fondo} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          nestedScrollEnabled
        // showsHorizontalScrollIndicator={false}
        // showsVerticalScrollIndicator={false}
        >
          <GraficaSonido />
          <GraficaMovimiento />
          <GraficaTemperatura />
        </ScrollView>

      </View>
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('menuPrincipal')}
          style={styles.buttons}
        >
          <Text style={styles.buttonText}>Regresar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    paddingHorizontal: "10%"
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: "7%"
  },
  mainView: {
    // alignItems: "center"
  }, buttons: {
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