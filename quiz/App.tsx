import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';

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
import QuizResult from "./components/quizResult";
import DisplayTests from "./components/displayTests";
import FetchData from "./components/fetchData";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const logo = require("./assets/quiz.png")

function App(): JSX.Element {

    const a = [1,2,3]
    const [isFirstTimeOpen, setIsFirstTimeOpen]=useState(false)
    const [tests, setTests] = useState<any[]>([])


    const rules = {
        '1': 'Nie będziesz miał quizów cudzych przede mną.',
        '2': 'Wybierasz tylko jedną odpowiedź.',
        '3': 'Nie oszukuj.',
        '4': 'Wszystkie wyniki będą udostępnione.',
        '5': 'Nie pożądaj wyniku bliźniego swego.',
    }
    const msg = Object.entries(rules).map(([key, value]) => `\n${key}. ${value}`).join(" ")
    const storeData = async () => {

        try {
            // const jsonValue = JSON.stringify(rules);
            // await AsyncStorage.setItem('my-key', jsonValue);
            await AsyncStorage.setItem('isFirstTimeOpen', 'false')
        } catch (e) {
            // saving error
        }
    };
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('isFirstTimeOpen');
            console.log(jsonValue)
            // @ts-ignore
            setIsFirstTimeOpen(jsonValue)
            // if (jsonValue) {
            //     setIsFirstTimeOpen(false)
            //     // let rules = JSON.parse(jsonValue)
            //     let msg = Object.entries(rules).map(([key, value]) => `\n${key}. ${value}`).join(" ")
            //     Alert.alert('Regulamin',
            //         msg
            //    ,[{text: "ok"}]);
            // }
        } catch (e) {
            // error reading value
        }
    };
    const checkFirstTimeOpen = async () =>{
        const res = await AsyncStorage.getItem("isFirstTimeOpen")
        console.log("resese" + res)
        if (res == null){
            setIsFirstTimeOpen(true)
            console.log("res" + isFirstTimeOpen)
            showRules()
        }
        storeData().then(r => getData())
    }

    const showRules = () => {
        console.log(isFirstTimeOpen)
            Alert.alert('Regulamin',
                msg
                ,[{text: "ok"}])
    }

    const getTest = () => {
        fetch('https://tgryl.pl/quiz/tests')
            .then(response => response.json())
            .then(data => {
                    setTests(data)
                    tests.map((t) => {
                        console.log(t.name)
                    })
                }
            )
            .catch(error => {
                console.error(error);
            });

    }

    useEffect(() => {
        if (Platform.OS === 'android')
            SplashScreen.hide();
        checkFirstTimeOpen().then(r => null)
        getTest()
        // storeData().then(r => getData())
    }, [])

    // @ts-ignore
    // @ts-ignore
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
              {/*<Drawer.Screen name="tests" component={DisplayTests} options={{unmountOnBlur: true}} />*/}
              {/*<Stack.Screen name="test" component={Test} />*/}
              {tests.map((t, index) => {
                  return(
                      <Drawer.Screen name={t.name} key={index} component={Test} initialParams={{id: t.id}} />
                  )
              })}

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
