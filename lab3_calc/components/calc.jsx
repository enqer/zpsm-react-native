import { Text, View, TouchableOpacity } from "react-native";

import { useEffect, useState } from "react";




const Calc = () => {

  const [tab, setTab] = useState([]);
  const [napis, setNapis] = useState('0');



  const press = (e,sign) => {
    setTab([...tab,sign]);
    setNapis([...tab,sign].join(''))
    console.log(sign);
  }
  const clearBar = () => {
    setTab([]);
    setNapis('0');
  }

  const oblicz = () => {
    if (tab.isEmpty) setNapis('0')
    if (tab.includes('+') || tab.includes('-') || tab.includes('x') || tab.includes('/')){
      let index;
      let s = tab.join('');
      let w = 0;
      switch (true){
        case tab.includes('+'):
          index = tab.lastIndexOf('+');
          w = parseFloat(s.substring(0,index)) + parseFloat(s.substring(index+1));
          break;
        case tab.includes('-'):
          index = tab.lastIndexOf('-');
          w = parseFloat(s.substring(0,index)) - parseFloat(s.substring(index+1));
          break;
        case tab.includes('x'):
          index = tab.lastIndexOf('x');
          w = parseFloat(s.substring(0,index)) * parseFloat(s.substring(index+1));
          break;
        case tab.includes('/'):
          index = tab.lastIndexOf('/');
          w = parseFloat(s.substring(0,index)) / parseFloat(s.substring(index+1));
          break;
      }
      setNapis(w);
    }else{
      clearBar()
    }
  }


  return (
     <View style={styles.screen}>
       <View style={styles.ekran}>
         <Text style={styles.ekranText}>{napis}</Text>
       </View>
       <TouchableOpacity onPress={() => clearBar()} style={[styles.kwadrat, styles.colorAc]}>
         <Text style={[styles.text]} >AC</Text>
       </TouchableOpacity>
       <View style={[styles.kwadrat, styles.gap, , styles.colorAc]}>
         <Text style={[styles.text]} > </Text>
       </View>

       <TouchableOpacity onPress={(e) => press(e,'/')} style={[styles.kwadrat, styles.colorF]}>
         <Text style={styles.text}>/</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={(e) => press(e,'7')} style={styles.kwadrat}>
         <Text style={styles.text}>7</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={(e) => press(e,'8')} style={styles.kwadrat}>
         <Text style={styles.text}>8</Text>
       </TouchableOpacity >
       <TouchableOpacity onPress={(e) => press(e,'9')} style={styles.kwadrat}>
         <Text style={styles.text}>9</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={(e) => press(e,'x')} style={[styles.kwadrat, styles.colorF]}>
         <Text style={styles.text}>x</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={(e) => press(e,'4')} style={styles.kwadrat}>
       <Text style={styles.text}>4</Text>
     </TouchableOpacity>
       <TouchableOpacity onPress={(e) => press(e,'5')} style={styles.kwadrat}>
       <Text style={styles.text}>5</Text>
     </TouchableOpacity>
       <TouchableOpacity onPress={(e) => press(e,'6')} style={styles.kwadrat}>
       <Text style={styles.text}>6</Text>
     </TouchableOpacity>
       <TouchableOpacity onPress={(e) => press(e,'-')} style={[styles.kwadrat, styles.colorF]}>
       <Text style={styles.text}>-</Text>
     </TouchableOpacity>
       <TouchableOpacity onPress={(e) => press(e,'1')} style={styles.kwadrat}>
         <Text style={styles.text}>1</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={(e) => press(e,'2')} style={styles.kwadrat}>
       <Text style={styles.text}>2</Text>
     </TouchableOpacity>
       <TouchableOpacity onPress={(e) => press(e,'3')} style={styles.kwadrat}>
       <Text style={styles.text}>3</Text>
     </TouchableOpacity>
       <TouchableOpacity onPress={(e) => press(e,'+')} style={[styles.kwadrat, styles.colorF]}>
         <Text style={styles.text}>+</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={(e) => press(e,'0')} style={[styles.kwadrat, styles.gap]}>
         <Text style={styles.text}>0</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={(e) => press(e,'.')} style={styles.kwadrat}>
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
