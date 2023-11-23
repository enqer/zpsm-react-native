/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer} from "@react-navigation/native";
// @ts-ignore
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import Home from "./components/home";

const Stack = createNativeStackNavigator();

function App(): JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
