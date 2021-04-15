import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar, Button } from 'react-native';
import Auth from './src/components/Auth';
import firebase from './src/utils/firebase';
import 'firebase/auth';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

export default function Principal(props) {

  const [user, setUser] = useState(undefined);
  const [emailToShow, setEmailToShow] = useState();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response);
      setEmailToShow(response.email);
    })

  }, []);

  if (user === undefined) return null;


  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='yellow' />
      <SafeAreaView style={styles.background}>
        <View>holi</View>
      </SafeAreaView>
    </>
  )
}

function Logout(props) {

    const logout = () => {
      firebase.auth().signOut();
    }

    function Logout(props) {}
}


/* function Logout(props) {

  const logout = () => {
    firebase.auth().signOut();
  }
  const [Question1, setQuestion1] = useState(-1);
  var radio_propsQ1 = [
    { label: 'si lo practico.', value: 0 },
    { label: 'si pienso en ello.', value: 1 }
  ];
  const [Question5, setQuestion5] = useState(-1);
  var radio_propsQ5 = [
    { label: 'hablar de ello. ', value: 0 },
    { label: 'pensar en ello', value: 1 }
  ];
  const [Question9, setQuestion9] = useState(-1);
  var radio_propsQ9 = [
    { label: 'participe y contribuya con ideas. ', value: 0 },
    { label: 'no participe y solo escuche. ', value: 1 }
  ];
  const [Question13, setQuestion13] = useState(-1);
  var radio_propsQ13 = [
    { label: 'he llegado a saber como son muchos de los estudiantes', value: 0 },
    { label: 'raramente he llegado a saber como son muchos estudiantes. ', value: 1 }
  ];
  const [Question17, setQuestion17] = useState(-1);
  var radio_propsQ17 = [
    { label: 'comience a trabajar en su solución inmediatamente. ', value: 0 },
    { label: 'primero trate de entender completamente el problema.', value: 1 }
  ];
  const [Question21, setQuestion21] = useState(-1);
  var radio_propsQ21 = [
    { label: 'en un grupo de estudio. ', value: 0 },
    { label: 'solo.', value: 1 }
  ];
  const [Question25, setQuestion25] = useState(-1);
  var radio_propsQ25 = [
    { label: 'hacer algo y ver que sucede', value: 0 },
    { label: 'pensar como voy a hacer algo. ', value: 1 }
  ];
  const [Question29, setQuestion29] = useState(-1);
  var radio_propsQ29 = [
    { label: 'algo que he hecho. ', value: 0 },
    { label: 'algo en lo que he pensado mucho. ', value: 1 }
  ];
  const [Question33, setQuestion33] = useState(-1);
  var radio_propsQ33 = [
    { label: 'realizar una "tormenta de ideas" donde cada uno contribuye con ideas', value: 0 },
    { label: 'realizar la "tormenta de ideas" en forma personal y luego juntarme con el grupo para comparar las ideas. ', value: 1 }
  ];
  const [Question37, setQuestion37] = useState(-1);
  var radio_propsQ37 = [
    { label: 'abierto. ', value: 0 },
    { label: 'reservado. ', value: 1 }
  ];
  const [Question41, setQuestion41] = useState(-1);
  var radio_propsQ41 = [
    { label: 'me parece bien. ', value: 0 },
    { label: 'no me parece bien. ', value: 1 }
  ];
  return (
    <View>
      <Text style={{ fontSize: 16, }}>Logueado como: {props.text}</Text>
      <View>
        <Text>Entiendo mejor algo</Text>
        <RadioForm
          radio_props={radio_propsQ1}
          initial={-1}
          onPress={(value) => { setQuestion1({ value: value }) }}
        />
        <Text>Me considero </Text>
        <RadioForm
          radio_props={radio_propsQ5}
          initial={-1}
          onPress={(value) => { setQuestion5({ value: value }) }}
        />
        <Text>Cuando pienso acerca de lo que hice ayer, es más probable que lo haga sobre la base de</Text>
        <RadioForm
          radio_props={radio_propsQ9}
          initial={-1}
          onPress={(value) => { setQuestion9({ value: value }) }}
        />
      </View>
      <Button title='cerrar sesion' onPress={logout}></Button>
    </View>
  )
} */

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    //backgroundColor: '#15212b',
    height: '100%',
  }
})