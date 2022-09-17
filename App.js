/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image
}
from 'react-native';

import Lottie from 'lottie-react-native';

import Main from './src/features/main/main.page';

const App: () => Node = () => {
  return (
    <Lottie 
    style={styles.loader}
    source={require('./src/assets/Loading_Page-loader.json')} autoPlay loop />
     ); 
};
 
export default App;

const styles = StyleSheet.create({
  loader: {
      marginTop: -25,

  },
});
