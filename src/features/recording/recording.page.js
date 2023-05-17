import type {Node} from 'react';
import React, { useEffect, useState } from 'react';

import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';
import Voice from '@react-native-community/voice';
import tw from 'twrnc';
import { Results } from '../results/results.page';
import { useNavigation } from '@react-navigation/native';

export function Recording(){

    const navigation = useNavigation();
    const [result, setResult] = useState('')
    const [isLoading, setLoading] = useState(false)

    const onNextButtonPress = () => {
      navigation.navigate('ResultsScreen', { result });
    };
  
    useEffect(() => {
      Voice.onSpeechStart = onSpeechStartHandler;
      Voice.onSpeechEnd = onSpeechEndHandler;
      Voice.onSpeechResults = onSpeechResultsHandler;
  
      return () => {
        Voice.destroy().then(Voice.removeAllListeners);
      }
    }, [])
  
    const onSpeechStartHandler = (e) => {
      console.log("start handler==>>>", e)
    }
    const onSpeechEndHandler = (e) => {
      setLoading(false)
      console.log("stop handler", e)
    }
  
    const onSpeechResultsHandler = (e) => {
      let text = e.value[0]
      setResult(text)
      console.log("speech result handler", e)
      // navigation.navigate('ResultsScreen', { result: text });
    }
  
    const startRecording = async () => {
      setLoading(true)
      try {
        await Voice.start('en-Us')
      } catch (error) {
        console.log("error raised", error)
      }
    }
  
    const stopRecording = async () => {
      try {
        await Voice.stop()
      } catch (error) {
        console.log("error raised", error)
      }
    }
  
    return(
      <SafeAreaView style={styles.container}>
        <View style={[styles.header, {flexDirection: "row"}]}>
                <TouchableOpacity
                onPress={() => navigation.navigate('MainScreen')}>
                <Image style={tw`-ml-3 mt-7`} source={require('./assets/back_btn.png')}/>
                </TouchableOpacity>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TextInput
                value={result}
                placeholder={''}
                onChangeText={text => setResult(text)}
                style={[tw`mt-5 `,styles.InputForm]}
                editable={false}/>
            
                <View style={[styles.container, {flexDirection: "row"}]}>
                <TouchableOpacity onPress={stopRecording}>
                <Image style={tw`mt-5`} source={require('./assets/redo.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={startRecording}>
                <Image style={tw`mt-5`} source={require('./assets/mic_btn.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onNextButtonPress}>
                <Image style={tw`mt-5`} 
                source={require('./assets/next_btn.png')}/>
                </TouchableOpacity>
                </View>
            <Text 
            style= {[tw`mt-5 `, styles.text]}>
                PUSH TO START TALKING
            </Text>
        </View>
        
    </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  header:{
    justifyContent: 'space-between'
},
  InputForm:{
      width: 300,
      height: 380,
      borderRadius: 15,
      backgroundColor: '#E8E8E8',
      elevation: 10
  },
  text: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '200',
      fontSize: 20,
      color: "#191919"
  },
  button: {
      alignItems: "center",
      backgroundColor: "#FFD7B9",
      padding: 16,
      width: 160,
      borderRadius: 10,   
      elevation: 10
  },
 
})
// const styles = StyleSheet.create({
//     container: {
//         marginTop: 25,
//         marginLeft: 10
//     },
//     InputForm:{
//         position: 'absolute',
//         width: 300,
//         height: 280,
//         left: 35,
//         top: 100,
//         borderRadius: 15,
//         backgroundColor: '#E8E8E8',
//     },
//     Redo: {
//         position: 'absolute',
//         width: 90,
//         height: 90,
//         left: 60,
//         top: 423,   
//     },
//     GreaterThan: {
//         position: 'absolute',
//         width: 90,
//         height: 90,
//         left: 220,
//         top: 423,
//     },
//     MenuBar: {
//         position: 'absolute',
//         width: 25,
//         height: 20,
//         left: 326
//     },
//     Back: {
//         position: 'absolute',
//         width: 25,
//         height: 25,
//         left: 24,
//     },

// });