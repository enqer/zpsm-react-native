/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/* eslint-disable */
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Platform, Text, View} from 'react-native';

function App() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <View>
      <Text>Test</Text>
    </View>
  );
}

export default App;
