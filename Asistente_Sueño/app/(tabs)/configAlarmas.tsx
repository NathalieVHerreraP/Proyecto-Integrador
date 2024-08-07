import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, StatusBar, Platform, TouchableOpacity } from 'react-native';
import TimeInput from '@tighten/react-native-time-input';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from 'react-native-elements';
import MyTimePicker from './timePicker'



export default function ConfigAlarms( {navigation}: any ) {



const fondo = {uri: '../../assets/fondos/fondo2.png'}
const rel = {uri: '../../assets/images/reloj.png'}

// const [date, setDate] = useState(new Date());
// const [mode, setMode] = useState('time');
// const [show, setShow] = useState(false);
// const [text, setText] = useState('Empty');

// const onChange = (event, selectedDate) => {
//   const currentDate = selectedDate || date;
//   setShow(Platform.OS === 'ios');
//   setDate(currentDate);

//   let tempDate = new Date(currentDate);
//   let fDate =tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
//   let fTime = 'Hora: '+ tempDate.getHours()+ ' | Minutes: ' + tempDate.getMinutes();
//   setText(fDate + '\n' + fTime);

//   console.log(fDate + '\n' + fTime)
// }

// const showMode = (currentMode) => {
//   setShow(true);
//   setMode(currentMode);

// }

//   const onChange = (e, selectedDate) =>{
//     setDate(selectedDate)
//   }

// const setDate = (event: DateTimePickerEvent, date: Date) => {
//   const {
//     type,
//     nativeEvent: {timestamp, utcOffset},
//   } = event;
// };
  

  return (
    <View>
      <ImageBackground source={fondo} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>¿A qué hora te gustaría despertar?</Text>

        <Image source={require('../../assets/images/reloj.png')} />

        <TouchableOpacity
        onPress={() =>
          navigation.navigate('configDormir')}
        style={styles.buttons}
        >
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>


     {/*}   <Button title={"Show the data picker"}/>
        <DateTimePicker 
        mode="time" 
        display="clock"
        onChange={this.setDate}
        value={new Date()}
        is24Hour={true}/>


        

        {/* <DateTimePicker
          value={date}
          mode={"date"}
          is24Hour={true}
          onChange={onChange}
        />

        <DateTimePicker
          value={date}
          mode={"time"}
          is24Hour={true}
          onChange={onChange}
        />
      <Text>{date.toLocaleString()}</Text> */}

      
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
    paddingVertical: "10%"
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
  },
});