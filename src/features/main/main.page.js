import React from 'react';
import type {Node} from 'react';
// import { Data } from './components/data';

import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


export function Main (){
        return(
            <SafeAreaView style={styles.container}>
                <View>
                <Image
                style={styles.MenuBar}
                source={require('./assets/Menu_Bar.png')}
                />
                <Image
                style={styles.Logo}
                source={require('./assets/logo_no_name.png')}
                />
                <Text 
                style= {styles.sectionText}>
                    SELECT DIALECT
                </Text>
                <Text
                style= {styles.desc}>
                    Translate text from
                </Text>
                {/* <Data></Data> */}
                <Text
                style= {styles.desc1}>
                    to Tagalog
                </Text>
                
            </View>
            <View>
            <Button
                title='Get Started!'
                color= '#FFD7B9'
                top= '413'
                />
            </View>

            </SafeAreaView>
            
        );
    }
    


const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        marginLeft: 10
    },
    Logo: {
        position: 'absolute',
        width: 78,
        height: 70,
        left: 149,
        top: 136
    },
    MenuBar: {
        position: 'absolute',
        width: 25,
        height: 20,
        left: 326
    },
    sectionText: {
        position: 'absolute',
        width: 166,
        height: 21,
        left: 105,
        top: 240,

        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 27,
        color: "#191919"
    },
    desc: {
        position: 'absolute',
        width: 137,
        height: 22,
        left: 24,
        top: 283,

        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
        color: "#191919"
    },
    desc1: {
        position: 'absolute',
        width: 77,
        height: 22,
        left: 274,
        top: 347,

        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
        color: "#191919"
    },
    // lang: {
    //     position: 'absolute',
    //     width: 327,
    //     height: 40,
    //     left: 24,
    //     top: 311,
    //     marginRight: 20
    // },
    btn: {
        position: 'absolute',
        width: 144,
        height: 60,
        left: 115,
        top: 600,
        borderRadius: 10,
    }
    
  
});

export default Main;