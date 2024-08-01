import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import TimeInput from '@tighten/react-native-time-input';
import { useState } from 'react';


export default function ConfigAlarms() {
//   const [time, setTime] = useState('');

//   const handleTimeChange = (time, validTime) => {
//     if (!validTime) return;

//     setTime(time);
// }


const fondo = {uri: '../../assets/fondos/fondo2.png'}


  return (
    <View>
      <ImageBackground source={fondo} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>¿A qué hora te gustaría despertar?</Text>

        



        {/* <TimeInput 
            setCurrentTime 
            onTimeChange={handleTimeChange} 
          />

          <Text>Current time entered is: {time}</Text>
        */}


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
  title:{
    fontSize: 30,
    color: "#fff",
    fontWeight: '900',
  }, 
});