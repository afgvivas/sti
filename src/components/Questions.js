import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

export default function Questions(props){
    const {Dquestions} = props;
    //const {onselectAns} = props;
    var radio_props = [
        { label: Dquestions.r1, value: 0 },
        { label: Dquestions.r2, value: 1 }
      ];
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
            <Text>
                {Dquestions.pregunta}
            </Text>
            <RadioForm
                radio_props={radio_props}
                initial={-1}
                //onPress={(value) => { ans.push({ value: value })}}
                onPress={(value) => {setAnswers(value);
                  console.log(answers);
                }}

            />
        </View>
    )
}

const styles = StyleSheet.create({});