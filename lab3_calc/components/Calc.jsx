import { Text, View, TouchableOpacity } from "react-native";

import { useEffect, useState } from "react";
import Przycisk from "./Przycisk";




const Calc = () => {

  const [napis, setNapis] = useState('');

  const buttons = [
    {
      styleTouchable : [styles.kwadrat, styles.colorAc],
      styleText : [styles.text],
      title: 'AC',
      disable: false,
      onPress: () => {
        clearBar()
      }
    },
    {
      styleTouchable : [styles.kwadrat, styles.gap, styles.colorAc],
      styleText : [styles.text],
      title: '',
      disable: true,
      onPress: () => {

      }
    },
    {
      styleTouchable : [styles.kwadrat,styles.colorF],
      styleText : [styles.text],
      title: '/',
      disable: false,
      onPress: () => {
        press('/')
      }
    },
    {
      styleTouchable : [styles.kwadrat],
      styleText : [styles.text],
      title: '7',
      disable: false,
      onPress: () => {
        press('7')
      }
    },
    {
      styleTouchable : [styles.kwadrat],
      styleText : [styles.text],
      title: '8',
      disable: false,
      onPress: () => {
        press('8')
      }
    },
    {
      styleTouchable : [styles.kwadrat],
      styleText : [styles.text],
      title: '9',
      disable: false,
      onPress: () => {
        press('9')
      }
    },
    {
      styleTouchable : [styles.kwadrat,styles.colorF],
      styleText : [styles.text],
      title: '*',
      disable: false,
      onPress: () => {
        press('*')
      }
    },
    {
      styleTouchable : [styles.kwadrat],
      styleText : [styles.text],
      title: '4',
      disable: false,
      onPress: () => {
        press('4')
      }
    },
    {
      styleTouchable : [styles.kwadrat],
      styleText : [styles.text],
      title: '5',
      disable: false,
      onPress: () => {
        press('5')
      }
    },
    {
      styleTouchable : [styles.kwadrat],
      styleText : [styles.text],
      title: '6',
      disable: false,
      onPress: () => {
        press('6')
      }
    },
    {
      styleTouchable : [styles.kwadrat,styles.colorF],
      styleText : [styles.text],
      title: '-',
      disable: false,
      onPress: () => {
        press('-')
      }
    },
    {
      styleTouchable : [styles.kwadrat],
      styleText : [styles.text],
      title: '1',
      disable: false,
      onPress: () => {
        press('1')
      }
    },
    {
      styleTouchable : [styles.kwadrat],
      styleText : [styles.text],
      title: '2',
      disable: false,
      onPress: () => {
        press('2')
      }
    },
    {
      styleTouchable : [styles.kwadrat],
      styleText : [styles.text],
      title: '3',
      disable: false,
      onPress: () => {
        press('3')
      }
    },
    {
      styleTouchable : [styles.kwadrat,styles.colorF],
      styleText : [styles.text],
      title: '+',
      disable: false,
      onPress: () => {
        press('+')
      }
    },
    {
      styleTouchable : [styles.kwadrat, styles.gap],
      styleText : [styles.text],
      title: '0',
      disable: false,
      onPress: () => {
        press('0')
      }
    },
    {
      styleTouchable : [styles.kwadrat],
      styleText : [styles.text],
      title: '.',
      disable: false,
      onPress: () => {
        press('.')
      }
    },
    {
      styleTouchable : [styles.kwadrat,styles.colorF],
      styleText : [styles.text],
      title: '=',
      disable: false,
      onPress: () => {
        oblicz()
      }
    },
  ]

  const press = (sign) => {

    setNapis(napis+sign)
    console.log(sign);
  }
  const clearBar = () => {
    // setTab([]);
    setNapis('');
  }

  const oblicz = () => {
  try{

    setNapis(eval(napis))
    } catch (e){
        setNapis('0')
    }
  }


  return (
     <View style={styles.screen}>
       <View style={styles.ekran}>
         {napis === '' ? <Text style={styles.ekranText}>0</Text> : <Text style={styles.ekranText}>{napis}</Text>}
       </View>
       {buttons.map((item,index) =>
         <Przycisk key={index} styleTouchable={item.styleTouchable} styleText={item.styleText} title={item.title} disable={item.disable} press={() => item.onPress()} index={index} />
         // <TouchableOpacity key={index} style={item.styleTouchable} disabled={item.disable} onPress={item.onPress}>
         //   <Text style={item.styleText}>{item.title}</Text>
         // </TouchableOpacity>
       )}
     </View>

  );
}

const styles = {
  screen: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',

  },
  kwadrat: {
    backgroundColor: '#7c7d7d',
    width: '25%',
    height: '16%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#48494b'

  },
  text: {
    fontSize: 32,
    color: 'white',
  },
  gap: {
    width: '50%'
  },
  colorAc: {
    backgroundColor: '#646466'
  },
  colorF: {
    backgroundColor: '#f1a33b'
  },
  ekran: {
    width: '100%',
    height: '20%',
    backgroundColor: '#525456',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  ekranText: {
    fontSize: 64,
    color: 'white',
  }
}

export default Calc;
