import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

export default function Questions(props){


    //const[i, setI] = useState(0);
    const[je, setJ] = useState(0);
    //const[temp, setTemp] = useState(0);
    //const j=-1, temp=-1;

  
    const {Dquestions} = props;
    const {uniqueShuffle} = props;
    //const {key} = props;
    const {order} = props;
    //console.log(`count vale ${count}`);
    console.log(`key vale ${order}`);
    //console.log(`item vale ${item.value}`);
    //const {onselectAns} = props;
    var radio_props = [
        { label: Dquestions.r1, value: 0 },
        { label: Dquestions.r2, value: 1 }
      ];
      //-----------------------------------------------------------------
      /* if(uniqueShuffle == 0){
        let i = radio_props.length - 1;
        for (; i > 0; i--) {
         j = Math.floor(Math.random() * (i + 1));
         temp = radio_props[i];
        radio_props[i] = radio_props[j];
        radio_props[j] = temp;
        }
        setJ(j);
      } */
      //setCount(2);
      
      //-----------------------------------------------------------------
      const[answers, setAnswers] = useState([]);
      /* const handleChange = (value) => {
        //var ans = this.RadioForm.value;
        //this.props.onSelectAnswer(1);        
        onselectAns.onSelectAnswer(1);  
    } */
      
      /* var radio_props = [
        { label: "Dquestions.r1", value: 0 },
        { label: "Dquestions.r2", value: 1 }
      ]; */

    return(
        <View>
            <Text style={{paddingHorizontal: 24, paddingVertical: 6}} >
                {order+1}. {Dquestions.pregunta}
            </Text>

            <RadioForm
                style={{paddingHorizontal: 24, paddingVertical: 6}} 
                radio_props={radio_props}
                initial={-1}
                buttonSize={10}
                buttonOuterSize={20}
                //onPress={(value) => { ans.push({ value: value })}}
                onPress={(value) => {props.getAnswer({pregunta: Dquestions.pregunta, respuesta: value, numero: Dquestions.n}); props.changeValue(uniqueShuffle)
                }}

            />
        </View>
    )
}

const styles = StyleSheet.create({});