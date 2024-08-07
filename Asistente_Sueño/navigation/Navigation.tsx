import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from "@/app/(tabs)/home";
import IniciarSesion from "@/app/(tabs)/iniciarSesion";
import Registrarse from "@/app/(tabs)/registrarse";
import ConfigAlarms from "@/app/(tabs)/configAlarmas";
import Graficas from "@/app/(tabs)/graficas";


const Stack = createNativeStackNavigator();

const MyStack = () => {
    return(
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen
                name="home"
                component={Home}
                //eliminar el titulo de arriba
                options={{
                    headerShown: false,
                    headerBackTitleVisible: false
                }}
                
            />
            <Stack.Screen
                name="iniciarSesion"
                component={IniciarSesion}
                //mostrar titulo
                options={{headerShown: false,
                    headerBackTitleVisible: false}}
            />
            
            <Stack.Screen
                name="registrarse"
                component={Registrarse}
                //mostrar titulo
                options={{headerShown: false,
                    headerBackTitleVisible: false}}
            />
            
            <Stack.Screen
                name="configAlarmas"
                component={ConfigAlarms}
                //mostrar titulo
                options={{headerShown: false,
                    headerBackTitleVisible: false}}
            />
            <Stack.Screen
                name="graficas"
                component={Graficas}
                //mostrar titulo
                options={{headerShown: false,
                    headerBackTitleVisible: false}}
            />
        </Stack.Navigator>
    );
}

export default function Navigation () {
    return(
        <NavigationContainer independent={true}>
            <MyStack /> 
        </NavigationContainer>
    );
    
}