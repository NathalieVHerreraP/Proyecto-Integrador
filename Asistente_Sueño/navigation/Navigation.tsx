import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from "@/app/(tabs)/home";
import IniciarSesion from "@/app/(tabs)/iniciarSesion";
import Registrarse from "@/app/(tabs)/registrarse";


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