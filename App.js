import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid, ScrollView, StyleSheet} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/FontAwesome5";
import {Image} from 'react-native';

const styles = StyleSheet.create({
    sections:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'lightgray',
        borderWidth: 1,
        borderColor:'lightgray',
        justifyContent: 'space-around',
        padding: 10,
        marginTop: 15
    },

    header:{
        textAlign:'center',
        fontSize:30,
        fontWeight: 'bold',
    },

    question:{
        flexDirection: 'row',
        backgroundColor: 'grey',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginBottom:10,
        borderWidth:2,
        borderStyle: 'dashed',
        borderColor: 'white',
        textAlign:'center',
        fontSize:25,
        color:'white',
    },

    answer: {
        flexDirection: 'row',
        backgroundColor:'lightblue',
        marginTop: 10,
        fontSize:20,
        fontWeight: 'bold',
        textAlign:'center',
    },

    img : {
        width: '100%',
        height:230
    }

})
{/*Custom Component for Username input*/}
const InputBox = ({label, onChangeText}) => {
  return (
      <View>
        <Text>{label}</Text>
        <TextInput style={{borderWidth: 1}} onChangeText={onChangeText}/>
      </View>
  )
}

const QuizApp = () => {
  const [username, setUser] = useState('');
  const [firstqn, setFirstQn] = useState('');
  const [secondqn, setSecondQn] = useState('');
  const [thirdqn, setThirdQn] = useState('');

  //This function assigns the correct answer to each of the three questions respectively
  const CorrectAnswers = {
    qn1: 'Bee',
    qn2: 'Peacock',
    qn3: 'Rabbit'
  };

  //The ScoreCalculation function assigns each question to its correct answer
  //TotalScore += (given value) essentially means that when the question is correct
  //the user will gain one point for each question that is answered correctly.
  //if the question has been answered incorrectly, there will be no points that is added to the total score
  //these points will be accumulated and then reflected in the TotalScore
  const ScoreCalculation = () => {
    let TotalScore = 0;
    if (firstqn === CorrectAnswers.qn1) TotalScore += 1;
    if (secondqn === CorrectAnswers.qn2) TotalScore += 1;
    if (thirdqn === CorrectAnswers.qn3) TotalScore += 1;
    return TotalScore;
  };

  //The results function calculates the displayed results and the message that is to be displayed according
  //to the calculated total score.
  const results = () => {
    const score = ScoreCalculation();
    let message;

    if (score === 3){
      message = "Well Done! A Perfect Score of 3/3"
    } else if (score === 2) {
      message = "Way to Go! Give the quiz another shot! 2/3"
    } else if (score === 1) {
      message = "Please try again! You have attained a score of 1/3"
    }

    Alert.alert(message)
  }

  return (
      <View style={{padding: 20, paddingTop: 50}}>
        <Text></Text>
        <Text style={styles.header}>
          <Icon name="paw" size={25} color="#B23B23" />
          Animal Quiz
          <Icon name="paw" size={25} color="#B23B23" />
        </Text>
        <Text></Text>

        <InputBox label="Insert your username" onChangeText={(text)=>setUser(text)} />

        <Text></Text>

        <ScrollView contentContainerStyle={{paddingBottom:150}}>
            <View style={styles.sections}>
                <Text style={styles.question}>
                    What Animal is this?
                </Text>
                <Image source= {require('./img/bee.jpg')} style={styles.img}></Image>
                <Text style={styles.answer}>
                    Answer:
                </Text>
                <RNPickerSelect
                    onValueChange={(value) => setFirstQn(value)}
                    items={[
                        { label: 'Bee', value: 'Bee' },
                        { label: 'Peacock', value: 'Peacock' },
                        { label: 'Rabbit', value: 'Rabbit' }
                    ]}
                />
            </View>

            <Text></Text>

            <View style={styles.sections}>
                <Text style={styles.question}>
                    What Animal is this?
                </Text>
                <Image source= {require('./img/peacock.jpg')} style={styles.img}></Image>
                <Text style={styles.answer}>
                    Answer:
                </Text>
                <RNPickerSelect
                    onValueChange={(value) => setSecondQn(value)}
                    items={[
                        { label: 'Bee', value: 'Bee' },
                        { label: 'Peacock', value: 'Peacock' },
                        { label: 'Rabbit', value: 'Rabbit' }
                    ]}
                />
            </View>

            <Text></Text>

            <View style={styles.sections}>
                <Text style={styles.question}>
                    What Animal is this?
                </Text>
                <Image source= {require('./img/rabbit.jpg')} style={styles.img}></Image>
                <Text style={styles.answer}>
                    Answer:
                </Text>
                <RNPickerSelect
                    onValueChange={(value) => setThirdQn(value)}
                    items={[
                        { label: 'Bee', value: 'Bee' },
                        { label: 'Peacock', value: 'Peacock' },
                        { label: 'Rabbit', value: 'Rabbit' }
                    ]}
                />
            </View>

          <Text></Text>
          <Button
              title="Submit Answers"
              onPress={results}
          />

        </ScrollView>
      </View>
  );
};

export default QuizApp;

