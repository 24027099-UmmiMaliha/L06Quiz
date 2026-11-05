import React, {useState} from 'react';
import {View, Text, Button, Alert, ScrollView} from 'react-native';
import {FontAwesome6} from '@expo/vector-icons';
import Instrument from './Components/music';

const MyApp = () => {

  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');


  // To Check quiz answers
  const submitAnswers = () => {
    let score = 0;
    if (answer1 === 'Brass') {
      score++;
    }
    if (answer2 === 'String') {
      score++;
    }
    if (answer3 === 'Percussion') {
      score++;
    }


    // Display feedback on score
    if (score === 3) {
      Alert.alert(
          'Excellent!',
          'You got all 3 answers correct! :D'
      );
    } else if (score >= 2) {
      Alert.alert(
          'Good job!',
          'You have ' + score + ' correct answers! Keep it up! :D'
      );
    } else {
      Alert.alert(
          "Don't give up!",
          'You have ' + score + ' correct answers. Try again next time! :D'
      );
    }
  };

  return (
      <ScrollView>

        {/* App Header */}
        <View style={{alignItems: 'center'}}>
          {/*//Icon*/}
          <Text></Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome6 name="music" size={25} color="#F67280"/>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#52796F'}}>
              Melody Quiz
            </Text>
            <FontAwesome6 name="music" size={25} color="#D98B9B"/>

          </View>

          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'purple' }}>
            Welcome to the Quiz!
          </Text>

          <Text style={{fontSize: 14, color: 'grey'}}>
            Can you identify these instrument families?
          </Text>

        </View>

        {/* Qns 1: Trombone */}
        <Instrument
            number="01"
            question="Which instrument family does this instrument belong to?"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnFzQBGq_Fs37W5Cv9I08yW6Pe-0Gjm4Mzl_5vItUPamiK8zTDqvkP4CGW&s=10"
            answer={answer1}
            setAnswer={setAnswer1}
            options={['Brass', 'String', 'Percussion','Electronic']}/>

        {/* Qns 2: Violin */}
        <Instrument
            number="02"
            question="Which instrument family does this instrument belong to?"
            image="https://i.pinimg.com/736x/55/57/1d/55571d9d43c41fd429e2cfde95d2d017.jpg"
            answer={answer2}
            setAnswer={setAnswer2}
            options={['Brass', 'String', 'Percussion','Electronic']}
        />

        {/* Qns 3: Drums */}
        <Instrument
            number="03"
            question="Which instrument family does this instrument belong to?"
            image="https://i.pinimg.com/474x/56/68/b3/5668b3c0f5576c0f9e972a7bf3060fee.jpg"
            answer={answer3}
            setAnswer={setAnswer3}
            options={['Brass', 'String', 'Percussion', 'Electronic']}
        />

        {/* Submit Answers */}
        <View style={{margin: 15}}>
          <Button
              title="SUBMIT ANSWERS"
              color="#12E193"
              onPress={submitAnswers}
          />
        </View>

        {/* Footer */}
        <Text style={{textAlign: 'center', color: 'purple', marginBottom: 25}}>
          Keep calm and enjoy the music!
        </Text>
      </ScrollView>
  );
};

export default MyApp;
