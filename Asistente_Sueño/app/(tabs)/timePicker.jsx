import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, StatusBar, Platform } from 'react-native';
import TimeInput from '@tighten/react-native-time-input';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from 'react-native-elements';


export default function MyTimePicker () {


    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');

    const onChange = (e, selectedDate) => {
      setDate(selectedDate);
      setShow(false);
    };

    const showMode = (modeToShow) => {
        setShow(true);
        setMode(modeToShow);
    }


    return(
        
        <View style={styles.container}>

            <Button title={'Seleccionar fecha'}
            onPress={()=> showMode('time')} />
            {
                show && (
                    <DateTimePicker
                        value={date}
                        mode={"time"}
                        is24Hour={true}
                        onChange={onChange}
                    />
                )
            }
            <DateTimePicker
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
            <Text>{date.toLocaleString()}</Text>
            <StatusBar style="auto" />
        </View>
            
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });