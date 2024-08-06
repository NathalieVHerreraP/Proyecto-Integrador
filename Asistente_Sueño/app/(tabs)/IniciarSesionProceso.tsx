import React, { useState, useEffect } from 'react';
import { View} from 'react-native';


export default function IniciarSesionProceso({route} : {route: any}, {navigation} : {navigation: any}) {
    const {userEmail, userPassword} = route.params;
    const [response, setResponse] = useState(null);

    const getSession = async () => {
      await fetch('http://localhost:3000/api/getusuario',{
        method: 'Post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "correo": userEmail,
          "contrasena": userPassword
        }),
      })
      .then((res) => res.json())
      .then((response) => setResponse(response))
      .catch(error => {
          console.error(error);
        });
    }

    useEffect(() => {
        getSession();
    }, []);
  
    console.log(response);

    if (response == false || response == null) {
      navigation.navigate('iniciarSesion', alert("Password or Email are incorrect"));
    }else{
      sessionStorage.setItem("ID", response['_id']);
      sessionStorage.setItem("nombreUsuario", response['nombreUsuario']);
      sessionStorage.setItem("correo", response['correo']);
      sessionStorage.setItem("contrasena", response['contrasena']);
      sessionStorage.setItem("edad", response['edad']);
  
      navigation.navigate('configAlarmas')
    }


  return (
    <View></View>
  );
}
