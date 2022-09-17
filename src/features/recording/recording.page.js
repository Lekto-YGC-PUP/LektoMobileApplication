import type {Node} from 'react';
import React from 'react';

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


export function Recording(){
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
            <TouchableOpacity>
            <Image
                style={styles.Redo}
                source={require('./assets/redo.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity>
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
                placeholder={''}
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