import { Image, StyleSheet, View, Text } from 'react-native';
import {BarChart} from "react-native-chart-kit";


export default function GraficaTemperatura() {

    const data = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
          {
            data: [24, 23, 25.5, 21.2, 20, 21.8, 22.6],
            colors: [
                // (opacity = 1) => `red`,
                // (opacity = 1) => `#ff00ff`,
                (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              ]

            
          }
        ]
      };
      const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 3, // optional, default 3
        barPercentage: 1,
        useShadowColorFromDataset: false // optional
      };
      
      
  return (
    <View style={styles.mainView}>
        <Text style={styles.text}>Temperatura promedio de la noche</Text>

        <BarChart
        // style={graphStyle}
        data={data}
        width={600}
        height={200}
        yAxisLabel="C°"
        chartConfig={chartConfig}
        verticalLabelRotation={10}
        showBarTops={true}
        withInnerLines={true}
        showValuesOnTopOfBars={true}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    mainView:{
      marginHorizontal: 15,
      alignItems: "center"
    },
    text: {
      fontSize: 25,
      color: "#fff",
      marginBottom: 42,
      paddingHorizontal: "10%"
    },
    });