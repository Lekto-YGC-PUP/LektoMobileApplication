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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './src/features/start/start-screen';
import Main from './src/features/main/main.page';
import {Recording} from './src/features/recording/recording.page';
import { Results } from './src/features/results/results.page';

const App: () => Node = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='StartScreen'
        component={StartScreen}
        options={{headerShown:false}}/>
        <Stack.Screen
        name='MainScreen'
        component={Main}
        options={{headerShown:false}}/>
        <Stack.Screen
        name='RecordingScreen'
        component={Recording}
        options={{headerShown:false}}/>
        <Stack.Screen
        name='ResultsScreen'
        component={Results}
        options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
     ); 
};
 
export default App;

const styles = StyleSheet.create({
  loader: {
      marginTop: -25,

  },
});
