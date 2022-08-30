import React from 'react';
import type {Node} from 'react';
import {
    Dropdown }
    from 'react-native-material-dropdown';

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
    render() {
        let data = [{
            value: 'Cebuano (Cebu)'
        },{
            value: 'Ilokano (Ilocos)'
        }];

        return(
            <View style={styles.container}>
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
                <Dropdown
                    data={data}
                />
    
                <Text
                style= {styles.desc1}>
                    to Tagalog
                </Text>
    
            </View>
        );
    }
    
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
        top: 357,

        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
        color: "#191919"
    },
    
  
});

export default Main;