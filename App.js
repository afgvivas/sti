import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar, Button, ScrollView } from 'react-native';
import Auth from './src/components/Auth';
import {decode, encode} from 'base-64';
//import Principal from './src/components/Principal';
import firebase from './src/utils/firebase';
import "firebase/firestore";
import 'firebase/auth';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
//import firebase from "./src/utils/firebase";
import Questions from "./src/components/Questions";

if(!global.btoa) global.btoa = encode;
if(!global.atob) global.atob = decode;

firebase.firestore().settings({experimentalForceLongPolling: true});

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
  //this.updateState = this.updateState.bind(this);
  const[questions, setQuestions] = useState([]);
  const[Dquestions, setDQuestions] = useState([]);
  const[Danswers, setDAnswers] = useState([]);
  const onSubmitSoquete = () => {
    console.log("esta entrando a la mierda");
    let errors = {};
    let soquete = {};
    let padre = {};
    //let soquete = FormData;
    soquete.nombre = "danieloxo";
    soquete.apellid= "mondragona";
    soquete.padre = "kary";
  
    db.collection(`${props.userID.uid}`).add(soquete).then(() => {
      console.log(props.userID.uid);
      console.warn("el soquete ha sido agregado exitosamente");
    }).catch(() => {
      console.error("error");
    });
  }

  useEffect(() => {
    setQuestions([]);
    setDAnswers([]);
    const answ = [];
    db.collection("questions")
    .orderBy("n")
    .get().then((response) =>{
      const itemsArray = [];
      response.forEach((doc) => {
        const data = doc.data();
        //data.id = doc.id; por si necesito borrar con el id de un documento
        itemsArray.push(data);
        console.warn(itemsArray);
      })
      setQuestions(itemsArray);
      console.error(`haber ${itemsArray}`);
      console.warn(`haber ${questions}`);
      if(questions !== undefined || questions !== null){
        setDQuestions(questions);
      }
      console.log(Dquestions);
    });
    
  }, []);

  //state = { ans: '' }
    
   /* const handleAnswer = (ansValue) => {
        //this.setState({ans: ansValue});
        //this.answ.push({ansValue});
        Danswers.push(ansValue);
        console.log(Danswers);
    } */

  
  return (
    <View>
      <Text style={{ fontSize: 16, }}>Logueado como: {props.text}</Text>
      
      <ScrollView style={styles.ScrollView}>
        {/* <Questions /> */}
        {Dquestions.map((item, index) => (
          <Questions key={index} Dquestions={item} />
          
        ))}
      </ScrollView>
      <Button title='cerrar sesion' onPress={logout}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    //backgroundColor: '#15212b',
    height: '100%',
  }
})