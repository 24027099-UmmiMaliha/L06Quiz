import React from 'react';
import {View, Text, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Instrument = ({number, question, image, answer, setAnswer, options}) => {

    return (
        <View style={{margin: 15, backgroundColor: '#DCD0FF', padding: 5, borderRadius: 10}}>

            <Text style={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>
                QUESTION {number}
            </Text>

            <Image
                source={{uri: image}}
                style={{width: '100%', height: 200}}
            />

            <Text style={{fontSize: 16,}}>
                {question}
            </Text>

            <Picker
                selectedValue={answer}
                onValueChange={(value) => setAnswer(value)}
            >
                <Picker.Item label="Choose an instrument type..." value="" />

                {options.map((option) => (
                    <Picker.Item
                        key={option}
                        label={option}
                        value={option}
                    />
                ))}

            </Picker>
        </View>
    );
};
export default Instrument;
