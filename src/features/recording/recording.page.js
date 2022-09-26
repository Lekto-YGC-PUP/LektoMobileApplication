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

export function Recording(){
    const [result, setResult] = useState('')
    const [isLoading, setLoading] = useState(false)
  
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
        <View 
        style={styles.container}>
            <Image
                style={styles.Back}
                source={require('./assets/EOS_ARROW_BACK_FILLED.png')}
                />
            <Image
                style={styles.MenuBar}
                source={require('./assets/Menu_Bar.png')}
                />
            <TouchableOpacity
            onPress={stopRecording}>
            <Image
            
                style={styles.Redo}
                source={require('./assets/redo.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={startRecording}
            >
            <Image
            
                style={styles.Record}
                source={require('./assets/record.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image
                style={styles.GreaterThan}
                source={require('./assets/greaterthan.png')}
                />
            </TouchableOpacity>
            <TextInput
                value={result}
                placeholder={''}
                onChangeText={text => setResult(text)}
                style={styles.InputForm}
                editable={false}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        marginLeft: 10
    },
    InputForm:{
        position: 'absolute',
        width: 300,
        height: 280,
        left: 35,
        top: 100,
        borderRadius: 15,
        backgroundColor: '#E8E8E8',
    },
    Record: {
        position: 'absolute',
        width: 120,
        height: 120,
        left: 125,
        top: 500,
    },
    Redo: {
        position: 'absolute',
        width: 90,
        height: 90,
        left: 60,
        top: 423,   
    },
    GreaterThan: {
        position: 'absolute',
        width: 90,
        height: 90,
        left: 220,
        top: 423,
    },
    MenuBar: {
        position: 'absolute',
        width: 25,
        height: 20,
        left: 326
    },
    Back: {
        position: 'absolute',
        width: 25,
        height: 25,
        left: 24,
    },

});