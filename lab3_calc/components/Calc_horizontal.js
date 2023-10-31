import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

// import XParser from 'xparser-mariusza-gromady';
// import XParser from 'mathparser.org-mxparser';
// import { Function } from 'mathparser.org-mxparser/out/Function'
// import { mXparser } from "mathparser.org-mxparser";
const math = require('mathjs');

const Calc_horizontal = () => {
  const [equation, setEquation] = useState('');
  const [msNum, setMsNum] = useState('');



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
      <View style={styles.row}>
        <TouchableOpacity style={styles.cell} onPress={() => addSign('(')}>
          <Text style={styles.text}>(</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={() => addSign(')')}>
          <Text style={styles.text}>)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={() => mc()}>
          <Text style={styles.text}>mc</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={() => mPlus()}>
          <Text style={styles.text}>m+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={() => mMinus()}>
          <Text style={styles.text}>m-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={() => mr()}>
          <Text style={styles.text}>mr</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={() => ac()}>
          <Text style={styles.text}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={() => plusMinus()}>
          <Text style={styles.text} >+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={() => addSign('%')}>
          <Text style={styles.text}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, styles.colorF]} onPress={() => addSign('/')}>
          <Text style={styles.text}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.cell, {flexDirection: 'row'}]} onPress={() => ms()}>
          {/*<Text style={[styles.text, {lineHeight: 30}]}>2</Text><Text style={{fontSize: 15, lineHeight: 15, color: 'white'}}>nd</Text>*/}
          <Text style={styles.text}>ms</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell,{flexDirection: 'row'}]} onPress={() => addSign('^2')}>
          <Text style={styles.text}>x²</Text>
          {/*<Text style={{fontSize: 15, lineHeight: 15, color: 'white'}}>2</Text>*/}
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell,{flexDirection: 'row'}]} onPress={() => addSign('^3')}>
          <Text style={styles.text}>x³</Text>
          {/*<Text style={{fontSize: 15, lineHeight: 15, color: 'white'}}>3</Text>*/}
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell,{flexDirection: 'row'}]} onPress={() => addSign('^')}>
          <Text style={styles.text}>x</Text><Text style={{fontSize: 15, lineHeight: 10, color: 'white'}}>y</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell,{flexDirection: 'row'}]} onPress={() => addSign('exp(')}>
          <Text style={styles.text}>e</Text><Text style={{fontSize: 15, lineHeight: 15, color: 'white'}}>x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell,{flexDirection: 'row'}]} onPress={() => addSign('10^')}>
          <Text style={styles.text}>10</Text><Text style={{fontSize: 15, lineHeight: 15, color: 'white'}}>x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, {backgroundColor: '#7c7d7d'}]} onPress={() => addSign('7')}>
          <Text style={styles.text} >7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, {backgroundColor: '#7c7d7d'}]} onPress={() => addSign('8')}>
          <Text style={styles.text} >8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, {backgroundColor: '#7c7d7d'}]} onPress={() => addSign('9')}>
          <Text style={styles.text} >9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, styles.colorF]} onPress={() => addSign('*')}>
          <Text style={styles.text}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.cell} onPress={() => addSign('(1/')}>
          <Text style={styles.text}>1/x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={() => addSign('^(1/2)')}>
          <Text style={styles.text}>&#8730;x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={() => addSign('^(1/3)')}>
          <Text style={styles.text}>&#8731;x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell,{flexDirection: 'row'}]} onPress={() => addSign('^(1/')}>
          <Text style={{fontSize: 15, lineHeight: 15, color: 'white'}}>y</Text>
          <Text style={styles.text}>&#8730;x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={() => addSign('log(')}>
          <Text style={styles.text}>ln</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell,{flexDirection: 'row'}]} onPress={() => addSign('log10(')}>
          <Text style={styles.text}>log₁₀</Text>
          {/*<Text style={{fontSize: 15, lineHeight: 45, color: 'white'}}>10</Text>*/}
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, {backgroundColor: '#7c7d7d'}]} onPress={() => addSign('4')}>
          <Text style={styles.text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, {backgroundColor: '#7c7d7d'}]} onPress={() => addSign('5')}>
          <Text style={styles.text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, {backgroundColor: '#7c7d7d'}]} onPress={() => addSign('6')}>
          <Text style={styles.text}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, styles.colorF]} onPress={() => addSign('-')}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.cell} onPress={() => addSign('!')}>
          <Text style={styles.text}>x!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={() => addSign('sin(')}>
          <Text style={styles.text}>sin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell } onPress={() => addSign('cos(')}>
          <Text style={styles.text}>cos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={() => addSign('tan(')}>
          <Text style={styles.text}>tan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={() => addSign('exp(1)')}>
          <Text style={styles.text}>e</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={() => toExpo()}>
          <Text style={styles.text}>EE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, {backgroundColor: '#7c7d7d'}]} onPress={() => addSign('1')}>
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, {backgroundColor: '#7c7d7d'}]} onPress={() => addSign('2')}>
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, {backgroundColor: '#7c7d7d'}]} onPress={() => addSign('3')}>
          <Text style={styles.text}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, styles.colorF]} onPress={() => addSign('+')}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.cell} onPress={() => addSign('Rad(')}>
          <Text style={styles.text}>Rad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={() => addSign('sinh(')}>
          <Text style={styles.text}>sinh</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={() => addSign('cosh(')}>
          <Text style={styles.text}>cosh</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={() => addSign('tanh(')}>
          <Text style={styles.text}>tanh</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={() => addSign('pi')}>
          <Text style={styles.text}>&pi;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={() => getRand()}>
          <Text style={styles.text}>Rand</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, {width: '20%',backgroundColor: '#7c7d7d' }]} onPress={() => addSign('0')}>
          <Text style={styles.text}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.cell, {backgroundColor: '#7c7d7d'}]} onPress={() => addSign('.')}>
          <Text style={styles.text}>,</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, styles.colorF]} onPress={() => calculate()}>
          <Text style={styles.text} >=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  view : {
    backgroundColor: 'red',
    flexDirection: 'column',
  },
  screen : {
    height: '20%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
    backgroundColor: '#48494b'
  },
  row: {
    backgroundColor: '#48494b',
    flexDirection: 'row',
    alignItems: 'center',
    height: '16%',
    width: '100%'

  },
  cell : {
    width: '10%',
    height: '100%',
    backgroundColor: '#525456',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#48494b',
    padding: '15'

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
