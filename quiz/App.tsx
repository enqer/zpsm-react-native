import 'react-native-gesture-handler';
import React from 'react';

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


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const logo = require("./assets/quiz.png")

function App(): JSX.Element {
const a = [1,2,3]
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
