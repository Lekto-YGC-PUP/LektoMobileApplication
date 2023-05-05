import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react';
import tw from 'twrnc';
import LottieView from 'lottie-react-native';

export function StartScreen () {
  return (
    <SafeAreaView>
      <Image source={require('./assets/LektoGIF.gif')}
      style={tw`absolute -mt-10 `} />
      <TouchableOpacity style={tw`absolute mt-77 ml-66 `} >
      <Image 
      source={require('./assets/start_btn.png')} 
      />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default StartScreen;

const styles = StyleSheet.create({})