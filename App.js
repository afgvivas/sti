import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar, Button, ScrollView, Alert } from 'react-native';
import Auth from './src/components/Auth';
import { decode, encode } from 'base-64';
import firebase from './src/utils/firebase';
import "firebase/firestore";
import 'firebase/auth';
import Questions from "./src/components/Questions";

if (!global.btoa) global.btoa = encode;
if (!global.atob) global.atob = decode;

firebase.firestore().settings({ experimentalForceLongPolling: true });

const db = firebase.firestore(firebase);

export default function App() {

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
        {user ? <Logout text={emailToShow} userID={user} /> : <Auth />}
      </SafeAreaView>
    </>
  )
}

function Logout(props) {

  const logout = () => {
    firebase.auth().signOut();
  }

  const and = [];
  let a = 0;
  let b = 0;
  let mayor = '';
  let c = 0;
  const [TA, setTA] = useState(0);
  const [TB, setTB] = useState(0);
  const [TC, setTC] = useState(0);
  const [uniqueShuffle, setUniqueShuffle] = useState(0);
  const [arrayLength, setArrayLength] = useState(0);

  const [calculateStyleEnable, setCalculateStyleEnable] = useState(true);

  const [questions, setQuestions] = useState([]);
  const [Dquestions, setDQuestions] = useState([]);
  const [Danswers, setDAnswers] = useState([]);

  const onSubmitSoquete = () => {

    let errors = {};
    let soquete = {};
    let padre = {};

    soquete.nombre = "danieloxo";
    soquete.apellid = "mondragona";
    soquete.padre = "kary";

    db.collection(`${props.userID.uid}`).add(soquete).then(() => {

    }).catch(() => {
      console.error("error");
    });
  }


  const getQuestions = () => {
    return new Promise(async (resolve, reject) => {
      let questionsRef = db.collection("questions").orderBy("n");
      let allQuestions = await questionsRef.get();
      const itemsArray = [];
      for (const doc of allQuestions.docs) {
        itemsArray.push(doc.data());
      }
      resolve(itemsArray);
    });
  }

  useEffect(() => {
    setQuestions([]);
    setDAnswers([]);
    const answ = [];

    const loadQuestions = async () => {

      await getQuestions().then(data => {
        return data;
      }).then(data => {
        let arrayTemp = [];
        arrayTemp = data;
        let i = arrayTemp.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = arrayTemp[i];
          arrayTemp[i] = arrayTemp[j];
          arrayTemp[j] = temp;
        }
        if (arrayTemp !== undefined || arrayTemp !== null) {
          setDQuestions(arrayTemp);
        }
      });
    }

    loadQuestions();




    /*db.collection("questions")
      .orderBy("n")
      .get().then((response) => {
        const itemsArray = [];
        response.forEach((doc) => {
          const data = doc.data();
          itemsArray.push(data);

        })
        setQuestions(itemsArray);
        let arrayTemp = [];
        arrayTemp = questions;
        let i = arrayTemp.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = arrayTemp[i];
          arrayTemp[i] = arrayTemp[j];
          arrayTemp[j] = temp;
        }
        if (arrayTemp !== undefined || arrayTemp !== null) {
          setDQuestions(arrayTemp);
        }
      });*/

  }, []);


  function random_item(items) {

    return items[Math.floor(Math.random() * items.length)];

  }

  const changeValue = (value) => {
    setUniqueShuffle(value + 1);
  }

  const createTwoButtonAlert = (message) =>
    Alert.alert(
      "Su estilo es:",
      `${message}`,
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  const getAnswer = (answer) => {
    console.log(`retornando ${JSON.stringify(answer)}`);
    console.log(`retornando ${answer.pregunta}`);
    console.log(`retornando ${answer.numero}`);
    console.warn(answer.respuesta);
    answer.respuesta === 0 ? setTA(TA + 1) : setTB(TB + 1);
    console.warn(a);
    console.warn(b);


    and[answer.numero - 1] = answer;
    setArrayLength(arrayLength + 1);

    if (answer.numero === 3) console.log(`posicion 1 ${JSON.stringify(and[0])}  posicion 2 ${JSON.stringify(and[1])}  posicion 3 ${JSON.stringify(and[2])}`);

    arrayLength == 10 ? setCalculateStyleEnable(false) : setCalculateStyleEnable(true);



  }

  const calculateStyle = () => {
    //console.error(`la mierda tiene ${this.a} y ${this.b}`);
    let x = TA;
    let y = TB;
    if (x > y) {
      c = x - y;
      mayor = "Estilo Visual";
    }
    if (y > x) {
      c = y - x;
      mayor = "Estilo Verbal";
    }
    if (x == y) {
      console.warn(`X vale ${x}`);
      console.warn(`Y vale ${Y}`);
      console.error("indeterminante.... A no puede valer lo mismo que B")
    }
    console.warn(`X vale ${x}`);
    console.warn(`Y vale ${y}`);
    getLearningStyle(c, mayor);

  }

  const getLearningStyle = (c, mayor) => {
    console.warn(`c vale ${c}`);
    console.warn(`mayor vale ${mayor}`);
    c >= 1 && c <= 4 ? createTwoButtonAlert(`Equilibrio entre los 2 extremos`) : null;
    c >= 5 && c <= 8 ? createTwoButtonAlert(`Preferencia moderada hacia ${mayor}`) : null;
    c >= 9 && c <= 11 ? createTwoButtonAlert(`Preferencia muy fuerte hacia ${mayor}`) : null;

  }

  return (
    <View>
      <Text style={{ fontSize: 16, paddingLeft: 24 }}>Logueado como: {props.text}</Text>

      <ScrollView style={styles.ScrollView}>
        {/* <Questions /> */}
        {Dquestions.map((item, index) => (
          <View>
            <Questions key={index} Dquestions={item} order={index} uniqueShuffle={uniqueShuffle} getAnswer={getAnswer} changeValue={changeValue} />
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}
            />
          </View>
        ))}
        <Button title='Determinar estilo' onPress={calculateStyle} disabled={calculateStyleEnable}></Button>
        <Button title='cerrar sesion' onPress={logout}></Button>
        <Button title='' onPress={logout}></Button>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    //backgroundColor: '#15212b',
    height: '100%',
  },
  separator: {

  }
})