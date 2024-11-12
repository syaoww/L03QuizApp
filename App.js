import React, {useState} from 'react';
import { StyleSheet,
          View,
          Text,
          Image,
          ScrollView,
          TextInput,
          Button,
          Alert, } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
    titleText: {
        fontSize: 21,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    margin: {
        marginLeft: 5
    },
    div: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 5,
        marginBottom: 20
    }
});

const PickerQn = ({picture})=> {
    return (
        <View>
            <Image source={picture} style={{width: 400, height:300 , alignSelf: 'center', marginTop: 10}}/>
            <Text style={styles.margin}>
                What is the location in the above photo?
            </Text>
        </View>
    );
};

const InputQn = ({image, label, onChangeText})=> {
  return (
      <View>
            <Image source={image} style={{width: 300, height:350 , alignSelf: 'center', marginTop: 10}}/>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText} />
      </View>
  );
};


const QuizApp = ()=> {
    const [answer1, setValue] = useState('');
    const [answer4, setAnswer4] = useState('');
    return (
        <ScrollView>
          <View style={styles.div}>
            <Icon name={"gamepad"} size={25} color={"#91754a"}/>
            <Text style={styles.titleText}>
              mini quiz
            </Text>
          </View>
            <PickerQn picture={require('./img/sakura.jpg')}></PickerQn>
            <RNPickerSelect
                onValueChange={(value) => setValue((value))}
                items={[
                    { label: 'Fravashi Tree', value: 'Fravashi' },
                    { label: 'Sacred Sakura Tree', value: 'Sakura' },
                    { label: 'Irminsul Tree', value: 'Irminsul' }
                ]}
            />
            <PickerQn picture={require('./img/dragonspine.jpg')}></PickerQn>
            <RNPickerSelect
                onValueChange={(value) => setValue((value))}
                items={[
                    { label: 'Tree of Dreams', value: 'DreamTree' },
                    { label: 'Frostbearing Tree', value: 'FrostTree' },
                    { label: 'Windrise Tree', value: 'Windrise' }
                ]}
            />
            <PickerQn picture={require('./img/akademiya.jpg')}></PickerQn>
            <RNPickerSelect
                onValueChange={(value) => setValue((value))}
                items={[
                    { label: 'Sumeru Akademiya', value: 'Akademiya' },
                    { label: 'Knights of Favonius Headquarters', value: 'HQ' },
                    { label: 'Fontaine Research Center', value: 'ResearchCenter' }
                ]}
            />
            <InputQn image={require('./img/Paimon.jpg')} label="Who is the character in the above image?" onChangeText={(text) => setAnswer4(text)}/>
            <Button onPress={() => {
                const correctAnswer1 = 'Sakura'
                const correctAnswer4 = 'Paimon'
                let mymessage = ''
                let correctCount = 0;
                if (answer1 == correctAnswer1) {
                    correctCount += 1;
                }
                if (answer4 == correctAnswer4) {
                    correctCount += 1;
                }
                if (correctCount > 1) {
                    mymessage += 'Well Done! You got ' + correctCount + ' correct!'
                } else {
                    mymessage += 'You got ' + correctCount + ' correct. Do better next time :)'
                Alert.alert(mymessage)}}}
                title="Submit Answers" color="#91754a">
            </Button>
        </ScrollView>
    );
}

/*
-- not sure where to nest the constants for useState within a class,
   there will be an error for invalid hook call, so QuizApp is a const instead
-- i don't know how to get multiple unique input values from different pickers
   hence there is only 1 question
-- correctCount function is wrong, i forgot how to do it, do i need to put it
   within a while statement?
 */

export default QuizApp;
