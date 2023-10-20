/* eslint-disable */

import { Text,StyleSheet, TouchableOpacity, View } from "react-native";
import { useState } from "react";

const Home = () => {

  const [name, setName]=useState("Paweł Kamiński");
  const [isHidden, setHidden]=useState(true);
  const [butName, setButName] =  useState("Pokaż");

  const onPress = () => {
    console.log('test');
    setHidden(!isHidden);
    isHidden ? setButName("Ukryj") : setButName("Pokaż");
  };

  return (

    <View style={styles.view}>
      <Text style={styles.text}>Zadanie 2</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{butName}</Text>
      </TouchableOpacity>
      {
        isHidden ? <View/> :
          <View>
            <Text style={styles.text}>Nazywam się</Text>
            <Text style={styles.textName}>{name}</Text>
          </View>
      }
    </View>
  );
};


const styles = {
  button: {
    backgroundColor: 'orange',
    padding: 15,
    margin: 10
  },
  text: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'center'
  },
  textName: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

}
export default Home;
