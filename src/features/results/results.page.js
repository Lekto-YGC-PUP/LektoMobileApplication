import type {Node} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native'
import React from 'react';
import tw from 'twrnc';
import LottieView from 'lottie-react-native';
import { Data } from '../components/data';
import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { translationDictionary } from './assets/translationdictionary';


export function Results ({route}) {

    const navigation = useNavigation();
    const { result } = route.params; //used for accessing result from recording screen to speech recorded text input
    const [data, setData] = useState ([{}]);

    const [translatedResult, setTranslatedResult] = useState(''); //for translation tagalog to cebuano

    useEffect(() => {
        const translateText = (text) => {
          const words = text.split(' ');
    
          const translatedWords = words.map((word) => {
            const translatedWord = translationDictionary[word.toLowerCase()];
            return translatedWord || word;
          });
    
          return translatedWords.join(' ');
        };
    
        const translatedText = translateText(result);
        setTranslatedResult(translatedText);
      }, [result]);

    // useEffect(() => {
    //     fetch ('http://192.168.0.24:5000/members').then(
    //         res => res.json()
    //     ).then(
    //         data => {
    //             setData(data);
    //             console.log(data);
    //             return(data);
    //         }
    //     );
    // },[]
    // );
  return (
    <SafeAreaView style={styles.container}>
        <View style={[styles.header, {flexDirection: "row"}]}>
                <TouchableOpacity
                onPress={() => navigation.navigate('RecordingScreen')}>
                <Image style={tw`-ml-3 mt-7`} source={require('./assets/back_btn.png')}/>
                </TouchableOpacity>
                </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text 
                style= {[tw`mt-5 `, styles.text]}>
                    Dialect 1 to Dialect 2
            </Text>
            <Text 
                style= {[tw`mt-4 -ml-48`, styles.h1text]}>
                    Speech Recorded
            </Text>
            <TextInput
                value={result}
                placeholder={''}
                style={[tw`mt-2`,styles.InputForm]}
                editable={false}/>
            <Text 
                style= {[tw`mt-4 -ml-56`, styles.h1text]}>
                    Translated to
            </Text>
            <TextInput
                value={translatedResult}
                placeholder={''}
                style={[tw`mt-2`,styles.InputForm]}
                editable={false}/>
            <View style={[styles.header, {flexDirection: "row"}]}>
                <TouchableOpacity style={[tw`mt-5 mr-10`,styles.button]}
                onPress={() => navigation.navigate('RecordingScreen')}>
                <Text style={styles.btntext}>Again</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[tw`mt-5 `,styles.button]}
                onPress={() => navigation.navigate('MainScreen')}>
                <Text style={styles.btntext}>Home</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    header:{
        justifyContent: 'space-between'
    },
    InputForm:{
        width: 300,
        height: 220,
        borderRadius: 15,
        backgroundColor: '#E8E8E8',
        elevation: 10
    },
    text: {
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        color: "#191919"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#FFD7B9",
        padding: 16,
        width: 140,
        borderRadius: 10,   
        elevation: 10
    },
    btntext: {
        fontFamily: 'Nunito Sans',
        fontStyle: 'bold',
        fontWeight: '700',
        fontSize: 16,
        color: "#191919"
    },
   
})