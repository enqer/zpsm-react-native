import { Text, View, TouchableOpacity } from "react-native";

import { useEffect, useState } from "react";




const Calc = () => {

  const [napis, setNapis] = useState('');



  const press = (sign) => {

    setNapis(napis+sign)
    console.log(sign);
  }
  const clearBar = () => {
    // setTab([]);
    setNapis('');
  }

  const oblicz = () => {
    setNapis(eval(napis))
  }


  return (
     <View style={styles.screen}>
       <View style={styles.ekran}>
         {napis === '' ? <Text style={styles.ekranText}>0</Text> : <Text style={styles.ekranText}>{napis}</Text>}

       </View>
       <TouchableOpacity onPress={() => clearBar()} style={[styles.kwadrat, styles.colorAc]}>
         <Text style={[styles.text]} >AC</Text>
       </TouchableOpacity>
       <View style={[styles.kwadrat, styles.gap, , styles.colorAc]}>
         <Text style={[styles.text]} > </Text>
       </View>

       <TouchableOpacity onPress={() => press('/')} style={[styles.kwadrat, styles.colorF]}>
         <Text style={styles.text}>/</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => press('7')} style={styles.kwadrat}>
         <Text style={styles.text}>7</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => press('8')} style={styles.kwadrat}>
         <Text style={styles.text}>8</Text>
       </TouchableOpacity >
       <TouchableOpacity onPress={() => press('9')} style={styles.kwadrat}>
         <Text style={styles.text}>9</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => press('*')} style={[styles.kwadrat, styles.colorF]}>
         <Text style={styles.text}>x</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => press('4')} style={styles.kwadrat}>
       <Text style={styles.text}>4</Text>
     </TouchableOpacity>
       <TouchableOpacity onPress={() => press('5')} style={styles.kwadrat}>
       <Text style={styles.text}>5</Text>
     </TouchableOpacity>
       <TouchableOpacity onPress={() => press('6')} style={styles.kwadrat}>
       <Text style={styles.text}>6</Text>
     </TouchableOpacity>
       <TouchableOpacity onPress={() => press('-')} style={[styles.kwadrat, styles.colorF]}>
       <Text style={styles.text}>-</Text>
     </TouchableOpacity>
       <TouchableOpacity onPress={() => press('1')} style={styles.kwadrat}>
         <Text style={styles.text}>1</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => press('2')} style={styles.kwadrat}>
       <Text style={styles.text}>2</Text>
     </TouchableOpacity>
       <TouchableOpacity onPress={() => press('3')} style={styles.kwadrat}>
       <Text style={styles.text}>3</Text>
     </TouchableOpacity>
       <TouchableOpacity onPress={() => press('+')} style={[styles.kwadrat, styles.colorF]}>
         <Text style={styles.text}>+</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => press('0')} style={[styles.kwadrat, styles.gap]}>
         <Text style={styles.text}>0</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => press('.')} style={styles.kwadrat}>
         <Text style={styles.text}>,</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={oblicz} style={[styles.kwadrat, styles.colorF]}>
         <Text style={styles.text}>=</Text>
       </TouchableOpacity>


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
