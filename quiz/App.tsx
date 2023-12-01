import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

import { NavigationContainer} from "@react-navigation/native";
// @ts-ignore
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from "./components/home";
import Results from "./components/results";
import Logo from "./components/logo";
import {DrawerLayout} from "react-native-gesture-handler";
import Test from "./components/test";
import CustomDrawer from "./components/customDrawer";
import SplashScreen from 'react-native-splash-screen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform, Alert, Text} from "react-native";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const logo = require("./assets/quiz.png")

function App(): JSX.Element {

const a = [1,2,3]
    const storeData = async () => {
        const rules = {
            '1': 'Pierwsze',
            '2': 'Drugie',
            '3': 'Trzecieee',
        }
        try {
            const jsonValue = JSON.stringify(rules);
            await AsyncStorage.setItem('my-key', jsonValue);
        } catch (e) {
            // saving error
        }
    };
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('my-key');
            if (jsonValue != null) {
                let rules = JSON.parse(jsonValue)
                let msg = Object.entries(rules).map(([key, value]) => `\n${key}. ${value}`).join(" ")
                Alert.alert('Regulamin',
                    msg
               ,[{text: "ok"}]);
            }
        } catch (e) {
            // error reading value
        }
    };

    useEffect(() => {
        if (Platform.OS === 'android')
            SplashScreen.hide();
        storeData().then(r => getData())
    }, [])

    return (
      <NavigationContainer>
          <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} initialRouteName="home"
          screenOptions={{
              drawerLabelStyle : {
                  // borderWidth: 1,
                  color: 'black',
                  textTransform: 'capitalize',
                  padding: 10,
                  fontSize: 18,
                  textAlign: 'center',
                  // width: '100%',
                  // backgroundColor: 'grey',

                  margin: 0
              }
          }}
          >
              <Drawer.Screen name="home" component={Home} />
              <Drawer.Screen name="results" component={Results} />
              <Drawer.Screen name="test" component={Test} />
          </Drawer.Navigator>
      </NavigationContainer>
  );
}
const styles = {
    container :{

    },
    img :{
        width: 80,
        height: 80
    }
}


export default App;