
import type {Node} from 'react';
import React, {useState, useEffect} from 'react';

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
    TouchableOpacity, TextInput
} from 'react-native';


export function Results(){
    
    const [data, setData] =useState ([{}]);

    useEffect(() => {
        fetch ('http://192.168.0.24:5000/members').then(
            res => res.json()
        ).then(
            data => {
                setData(data);
                console.log(data);
                return(data);
            }

        );
    },[]
    );



        return(
            <SafeAreaView style={styles.container}>
                <View>
                <Image
                style={styles.MenuBar}
                source={require('./assets/Menu_Bar.png')}
                />
                <Image
                style={styles.Back}
                source={require('./assets/EOS_ARROW_BACK_FILLED.png')}
                />
                <Text 
                style= {styles.sectionText}>
                    Dialect 1 - Dialect 2
                </Text>
                <TextInput
                value = {data[0]}

                style={styles.InputForm}
                editable={false}/>
                <TextInput
                placeholder={''}
                style={styles.InputForm2}
                editable={false}/>
                <Text
                style= {styles.desc}>
                    Speech Recorded
                </Text>
                <Text
                style= {styles.desc1}>
                    Translated Text
                </Text>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Again !</Text>
                </TouchableOpacity>
            </View>
            </SafeAreaView>
            
        );
    }
    


const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        marginLeft: 10
    },
    Back: {
        position: 'absolute',
        width: 25,
        height: 25,
        left: 24,
    },
    MenuBar: {
        position: 'absolute',
        width: 25,
        height: 20,
        left: 326
    },
    sectionText: {
        position: 'absolute',
        left: 90,
        top: 50,

        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 27,
        color: "#191919"
    },
    desc: {
        position: 'absolute',
        left: 24,
        top: 110,

        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
        color: "#191919"
    },
    desc1: {
        position: 'absolute',
        left: 24,
        top: 370,

        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
        color: "#191919"
    },
    btn: {
        position: 'absolute',
        left: 110,
        top: 640,        
    },
    button: {
        alignItems: "center",
        backgroundColor: "#FFD7B9",
        padding: 18,
        width: 144,
        borderRadius: 10,
        elevation: 10       
    },
    text: {
        color: "#191919",
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
    },
    InputForm:{
        position: 'absolute',
        width: 337,
        height: 220,
        left: 20,
        top: 140,
        borderRadius: 15,
        backgroundColor: '#E8E8E8',
    },  
    InputForm2:{
        position: 'absolute',
        width: 337,
        height: 220,
        left: 20,
        top: 400,
        borderRadius: 15,
        backgroundColor: '#E8E8E8',
    },  
    
  
});
