import React from 'react';
import type {Node} from 'react';
import "../main/input.css";

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
        </View>
        

    );
}

const styles = StyleSheet.create({
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
  
});

export default Main;