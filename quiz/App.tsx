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
import {Platform, Alert, Text, Button} from "react-native";
// import {CronJob} from 'cron';
import {openDatabase, SQLiteDatabase} from "react-native-sqlite-storage";
// @ts-ignore
import NetInfo from "@react-native-community/netinfo";
// import databa
//
//
const db = openDatabase({
    name: "rn_sqlite"
})

import { createTableTest, getTestsFromDB, addTestToDB} from './components/sqlite'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// @ts-ignore
import _ from 'lodash';


// let DB:any
// const getDB = () => DB ? DB : DB = openDatabase({name: 'md.db', createFromLocation: 1})

function App(): JSX.Element {


    const a = [1,2,3]
    const [isFirstTimeOpen, setIsFirstTimeOpen]=useState(false)
    const [tests, setTests] = useState<any[]>([])
    const [randomTest, setRandomTest] = useState('')



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
            await AsyncStorage.setItem('isFirstTimeOpen', 'false')
        } catch (e) {
            console.log(e)
        }
    };
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('isFirstTimeOpen');
            console.log(jsonValue)
            // @ts-ignore
            setIsFirstTimeOpen(jsonValue)
        } catch (e) {
            console.log(e)
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
                    // setRandomTest(data[Math.floor(Math.random()*data.length)])
                    setRandomTest(data[Math.floor(Math.random()*data.length)].id)
                console.log(randomTest+ "rand")
                console.log(data[Math.floor(Math.random()*data.length)].id + " hihihi")
                }
            )
            .catch(error => {
                console.log("brak neta")
                // console.error(error);
            });
        // createTableTest().then(r => console.log(r))
        saveTestToDb()
        console.log("TO JEST RANDOM: " + randomTest)
    }


    const saveTestToDb = () =>{
        // createTable(DB).then((d:any) => console.log(d)).catch((er:any) => console.log(er))
        tests.map((test) => {
                getTestToDb(test.id)
        })
    }
    const getTestToDb = (id:any) => {
        fetch(`https://tgryl.pl/quiz/test/${id}`)
            .then(response => response.json())
            .then(data => {
                    addTestToDB(JSON.stringify(data)).then(r => console.log(r))
                }
            )
            .catch(error => {
                console.log(error);
            });
        // console.log("test" + getAllTest(DB).tests)
    }

    const getTestFromDb =  () => {
        const t = getTestsFromDB()
        console.log("log" + t.then((data) =>{
            // console.log(JSON.parse(data.rows.item(1).json).description)
            let  arr = []
            console.log(data.rows.length)
            for (let i=0;i<data.rows.length;i++){
                let body = {
                    id: JSON.parse(data.rows.item(i).json).id,
                    description :JSON.parse(data.rows.item(i).json).description,
                    level: JSON.parse(data.rows.item(i).json).level,
                    name: JSON.parse(data.rows.item(i).json).name,
                    tags: JSON.parse(data.rows.item(i).json).tags,
                    tasks: JSON.parse(data.rows.item(i).json).tasks,
                    numberOfTasks: JSON.parse(data.rows.item(i).json).tasks.length
                }
                arr.push(body)
            }
            setTests(arr)
            setRandomTest(arr[Math.floor(Math.random()*arr.length)].id)
            console.log("re" +randomTest)
        }))
    }


    useEffect(() => {
        if (Platform.OS === 'android')
            SplashScreen.hide();
        checkFirstTimeOpen().then(r => null)
        NetInfo.fetch().then((state: { isConnected: any; type: any; }) => {
            if (state.isConnected){
                console.log("Connection type", state.type);
                console.log("Is connected?", state.isConnected);
                getTest()
            }else {
                getTestFromDb()
                console.log("Connection type", state.type);
                console.log("Is connected?", state.isConnected);
            }

        });
        //
        // storeData().then(r => getData())
    }, [])

    useEffect(() => {
        const everyDay = () => {
            createTableTest().then((t => console.log(t)))
            getTest()
            saveTestToDb()
            console.log('raz na dzień');

        };

        everyDay();


        const intervalId = setInterval(everyDay, 86400000);
        return () => clearInterval(intervalId);
    }, []);

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
              {tests != null ? _.shuffle(tests.map((t, index) => {
                  return(
                      <Drawer.Screen name={t.name} key={index} component={Test} initialParams={{id: t.id}} />
                  )
              })) : null}
              { tests[tests.length-1] != null ? <Drawer.Screen name="losowy"  component={Test} initialParams={{id: tests[Math.floor(Math.random()*tests.length)].id}} />
              : null }
              <Drawer.Screen name="odśwież" component={Home} />
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
