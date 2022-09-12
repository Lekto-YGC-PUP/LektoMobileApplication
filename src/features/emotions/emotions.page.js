import React from "react";3
import type {Node} from 'react';

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
    TouchableOpacity
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Data } from './components/data';

export function Emotions(){
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
            <View style={styles.body}>
            <Image
                style={styles.Happy}
                source={require('./assets/Happy.png')}
                />
                <Image
                style={styles.Sad}
                source={require('./assets/Sad.png')}
                />
                <Image
                style={styles.Surprised}
                source={require('./assets/Surprised.png')}
                />
                <Image
                style={styles.Confused}
                source={require('./assets/Confused.png')}
                />
                <Image
                style={styles.Angry}
                source={require('./assets/Angry.png')}
                />
                <Text style={styles.EmotionsIcons}>Emotions Icons</Text>
                <Text style={styles.Happytext}>Happy</Text>
                <Text style={styles.Sadtext}>Sad</Text>
                <Text style={styles.Surprisedtext}>Surprised</Text>
                <Text style={styles.Confusedtext}>Confused</Text>
                <Text style={styles.Angrytext}>Angry</Text>
            </View>
        </View>
        
    );
    
}
const styles = StyleSheet.create({
    body: {
        top: -30,
    },
    container: {
        marginTop: 25,
        marginLeft: 10
    },
    MenuBar: {
        position: 'absolute',
        width: 25,
        height: 20,
        left: 326
    },
    Happy : {
        position: 'absolute',
        width: 90,
        height: 90,
        left: 16,
        top: 152,
    },
    Sad : {
        position: 'absolute',
        width: 90,
        height: 90,
        left: 16,
        top: 242,
    },
    Surprised : {
        position: 'absolute',
        width: 90,
        height: 90,
        left: 16,
        top: 332,
    },
    Confused: {
        position: 'absolute',
        width: 90,
        height: 90,
        left: 16,
        top: 422,
    },
    Angry: {
        position: 'absolute',
        width: 90,
        height: 90,
        left: 16,
        top: 512,
    },
    EmotionsIcons: {
        position: 'absolute',
        width: 131,
        height: 27,
        left: 24,
        top: 108,

        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 27,
        color: "#00000"
    },
    Happytext: {
        position: 'absolute',
        width: 60,
        height: 27,
        left: 128,
        top: 184,

        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 27,
        color: "#00000"
    },
    Sadtext: {
        position: 'absolute',
        width: 35,
        height: 27,
        left: 128,
        top: 274,

        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 27,
        color: "#00000"
    },
    Surprisedtext: {
        position: 'absolute',
        width: 87,
        height: 27,
        left: 128,
        top: 364,

        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 27,
        color: "#00000"
    },
    Confusedtext: {
        position: 'absolute',
        width: 87,
        height: 27,
        left: 128,
        top: 454,

        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 27,
        color: "#00000"
    },
    Angrytext: {
        position: 'absolute',
        width: 87,
        height: 27,
        left: 128,
        top: 543,

        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 27,
        color: "#00000"
    },
    Back: {
        position: 'absolute',
        width: 25,
        height: 25,
        left: 24,
    },
    
    

});

export default Emotions;