import { Image, StyleSheet, View, ScrollView, ImageBackground} from 'react-native';
import Navigation from "@/navigation/Navigation"
import GraficaSonido from '@/components/graficaSonido';
import GraficaMovimiento from "@/components/graficaMovimiento";
import GraficaTemperatura from "@/components/graficaTemperatura";

const fondo = {uri: '../../assets/fondos/fondo_noche.jpeg'}
export default function Graficas() {
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
          <GraficaSonido/>
          <GraficaMovimiento/>
          <GraficaTemperatura/>
        </ScrollView>
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
    image:{
      flex: 1,
      justifyContent: 'center',
      paddingVertical: "10%"
    },
    mainView:{
      // alignItems: "center"
    },
    
  });