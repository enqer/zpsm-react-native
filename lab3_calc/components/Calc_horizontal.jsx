import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import Przycisk from "./Przycisk";


const math = require('mathjs');

const Calc_horizontal = () => {
  const [equation, setEquation] = useState('');
  const [msNum, setMsNum] = useState('');

  const buttons = [
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: '(',
      disable: false,
      onPress: () => {
        addSign('(')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: ')',
      disable: false,
      onPress: () => {
        addSign(')')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'mc',
      disable: false,
      onPress: () => {
        mc()
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'm+',
      disable: false,
      onPress: () => {
        mPlus()
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'm-',
      disable: false,
      onPress: () => {
        mMinus()
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'mr',
      disable: false,
      onPress: () => {
        mr()
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'ac',
      disable: false,
      onPress: () => {
        ac()
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: '+/-',
      disable: false,
      onPress: () => {
        plusMinus()
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: '%',
      disable: false,
      onPress: () => {
        addSign('%')
      }
    },
    {
      styleTouchable : [styles.cell, styles.colorF],
      styleText : [styles.text],
      title: '/',
      disable: false,
      onPress: () => {
        addSign('/')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'ms',
      disable: false,
      onPress: () => {
        ms()
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'x²',
      disable: false,
      onPress: () => {
        addSign('^2')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'x³',
      disable: false,
      onPress: () => {
        addSign('^3')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'x^y',
      disable: false,
      onPress: () => {
        addSign('^')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'e^x',
      disable: false,
      onPress: () => {
        addSign('exp(')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: '10^x',
      disable: false,
      onPress: () => {
        addSign('10^')
      }
    },
    {
      styleTouchable : [styles.cell, {backgroundColor: '#7c7d7d'}],
      styleText : [styles.text],
      title: '7',
      disable: false,
      onPress: () => {
        addSign('7')
      }
    },
    {
      styleTouchable : [styles.cell, {backgroundColor: '#7c7d7d'}],
      styleText : [styles.text],
      title: '8',
      disable: false,
      onPress: () => {
        addSign('8')
      }
    },
    {
      styleTouchable : [styles.cell, {backgroundColor: '#7c7d7d'}],
      styleText : [styles.text],
      title: '9',
      disable: false,
      onPress: () => {
        addSign('9')
      }
    },
    {
      styleTouchable : [styles.cell, styles.colorF],
      styleText : [styles.text],
      title: 'x',
      disable: false,
      onPress: () => {
        addSign('*')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: '1/x',
      disable: false,
      onPress: () => {
        addSign('(1/')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: '^(1/2',
      disable: false,
      onPress: () => {
        addSign('^(1/2')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: '^(1/3',
      disable: false,
      onPress: () => {
        addSign('^(1/3')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: '^(1/',
      disable: false,
      onPress: () => {
        addSign('^(1/')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'ln',
      disable: false,
      onPress: () => {
        addSign('log(')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'log₁₀',
      disable: false,
      onPress: () => {
        addSign('log10(')
      }
    },
    {
      styleTouchable : [styles.cell, {backgroundColor: '#7c7d7d'}],
      styleText : [styles.text],
      title: '4',
      disable: false,
      onPress: () => {
        addSign('4')
      }
    },
    {
      styleTouchable : [styles.cell, {backgroundColor: '#7c7d7d'}],
      styleText : [styles.text],
      title: '5',
      disable: false,
      onPress: () => {
        addSign('5')
      }
    },
    {
      styleTouchable : [styles.cell, {backgroundColor: '#7c7d7d'}],
      styleText : [styles.text],
      title: '6',
      disable: false,
      onPress: () => {
        addSign('6')
      }
    },
    {
      styleTouchable : [styles.cell, styles.colorF],
      styleText : [styles.text],
      title: '-',
      disable: false,
      onPress: () => {
        addSign('-')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'x!',
      disable: false,
      onPress: () => {
        addSign('!')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'sin',
      disable: false,
      onPress: () => {
        addSign('sin(')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'cos',
      disable: false,
      onPress: () => {
        addSign('cos(')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'tan',
      disable: false,
      onPress: () => {
        addSign('tan(')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'e',
      disable: false,
      onPress: () => {
        addSign('exp(1)')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'EE',
      disable: false,
      onPress: () => {
        toExpo()
      }
    },
    {
      styleTouchable : [styles.cell, {backgroundColor: '#7c7d7d'}],
      styleText : [styles.text],
      title: '1',
      disable: false,
      onPress: () => {
        addSign('1')
      }
    },
    {
      styleTouchable : [styles.cell, {backgroundColor: '#7c7d7d'}],
      styleText : [styles.text],
      title: '2',
      disable: false,
      onPress: () => {
        addSign('2')
      }
    },
    {
      styleTouchable : [styles.cell, {backgroundColor: '#7c7d7d'}],
      styleText : [styles.text],
      title: '3',
      disable: false,
      onPress: () => {
        addSign('3')
      }
    },
    {
      styleTouchable : [styles.cell, styles.colorF],
      styleText : [styles.text],
      title: '+',
      disable: false,
      onPress: () => {
        addSign('+')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'Rad',
      disable: false,
      onPress: () => {
        addSign('Rad(')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'sinh',
      disable: false,
      onPress: () => {
        addSign('sinh(')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'cosh',
      disable: false,
      onPress: () => {
        addSign('cosh(')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'tanh',
      disable: false,
      onPress: () => {
        addSign('tanh(')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'pi',
      disable: false,
      onPress: () => {
        addSign('pi')
      }
    },
    {
      styleTouchable : [styles.cell],
      styleText : [styles.text],
      title: 'Rand',
      disable: false,
      onPress: () => {
        getRand()
      }
    },
    {
      styleTouchable : [styles.cell, {width: '20%'},{backgroundColor: '#7c7d7d'}],
      styleText : [styles.text],
      title: '0',
      disable: false,
      onPress: () => {
        addSign('0')
      }
    },
    {
      styleTouchable : [styles.cell, {backgroundColor: '#7c7d7d'}],
      styleText : [styles.text],
      title: ',',
      disable: false,
      onPress: () => {
        addSign('.')
      }
    },
    {
      styleTouchable : [styles.cell, styles.colorF],
      styleText : [styles.text],
      title: '=',
      disable: false,
      onPress: () => {
        calculate()
      }
    },
  ]

  const ac = () => {
    setEquation('');

  }

  const addSign = (sign) => {
    console.log(sign)
    setEquation(equation+sign)

  }

  const calculate = () => {
    try {

      // setEquation(eval(equation));
      console.log(equation)
      setEquation(((math.parse(equation)).compile()).evaluate())
    } catch (e){
      setEquation('')
    }
  }

  const mc = () => {
    setMsNum(0);
  }

  const mPlus = () => {
    // setMsNum(eval(equation) + msNum)
    // let a = (math.parse(equation)).compile().evaluate()
    setMsNum(((math.parse((`${msNum} + ${equation}`)).compile()).evaluate()))
    console.log(msNum)

  }

  const mMinus = () => {
    // let a = (math.parse(equation)).compile().evaluate()
    setMsNum(((math.parse((`${msNum} - ${equation}`)).compile()).evaluate()))
    console.log(msNum)
  }

  const mr = () => {
    setEquation(msNum)
  }

  const ms = () => {
      // setMsNum(eval(equation));
      // setMsNum(((math.parse((equation+'*1'))).compile()).evaluate());
    setMsNum(equation)
      console.log(msNum)
  }

  const plusMinus = () => {
    equation.startsWith('-') ? setEquation(equation.substring(1)) : setEquation('-'+equation)
    // equation.indexOf(0)'-' ? setEquation(equation.substring(1)) : setEquation('-'+equation)
  }

  const checkEmptyEquation = () => {
    return equation === ''
  }

  const getRand = () => {
    setEquation(equation+(Math.ceil(Math.random() * 10)+1).toString())
  }


  const toExpo = () => {
    setEquation(parseFloat(equation).toExponential())

  }

  return (

    <View style={styles.view}>
      <View style={styles.screen}>
        {checkEmptyEquation() ? <Text style={[styles.text, styles.textScreen ]}>0</Text> : <Text style={[styles.text, styles.textScreen ]}>{equation} </Text>}
      </View>

      {buttons.map((item,index) =>
          <Przycisk key={index} styleTouchable={item.styleTouchable} styleText={item.styleText} title={item.title} disable={item.disable} press={() => item.onPress()} index={index} />)}

    </View>
  );
}

const styles = {
  new: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  view : {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  screen : {
    height: '20%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
    backgroundColor: '#48494b'

  },

  cell : {
    // flex: 1,
    width: '9.99999%',
    height: '16%',
    backgroundColor: '#525456',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#48494b',
    borderWidth: 1

  },
  colorF: {
    backgroundColor: '#f1a33b'
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  textScreen : {
    fontSize: 40
  }
}

export default Calc_horizontal;
