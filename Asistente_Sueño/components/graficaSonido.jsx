import { Image, StyleSheet, View, Text } from 'react-native';
import {LineChart} from "react-native-chart-kit";


export default function GraficaSonido() {

    const data = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
          {
            data: [2, 1, 2, 3, 2, 3, 5],
            color: (opacity = 1) => `rgba(020, 050, 200, ${opacity})`, // optional
            strokeWidth: 3 // optional
          }
        ],
      };
      const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 3, // optional, default 3
        barPercentage: 0,
        useShadowColorFromDataset: false // optional
      };

  return (
    <View style={styles.mainView}>
      <Text style={styles.text}>Sonido: horas activo después de la hora de dormir</Text>
      <LineChart
      data={data}
      width={500}
      height={200}
      verticalLabelRotation={10}
      chartConfig={chartConfig}
      bezier
      fromZero
      />
    </View>
  );
}

const styles = StyleSheet.create({
    mainView:{
      marginHorizontal: 1,
      alignItems: "center"
    },
    text: {
      fontSize: 25,
      color: "#fff",
      marginBottom: 10,
      paddingHorizontal: "10%"
      
    }
  });