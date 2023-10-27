import { Text, TouchableOpacity, View } from "react-native";


const Calc_horizontal = () => {

  return (
    <View style={styles.view}>
      <View style={styles.screen}>
        <Text style={[styles.text, styles.textScreen ]}>0</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>(</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>mc</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>m+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>m-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>mr</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, styles.colorF]}>
          <Text style={styles.text}>÷</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.cell, {flexDirection: 'row'}]}>
          <Text style={[styles.text, {lineHeight: 30}]}>2</Text><Text style={{fontSize: 15, lineHeight: 15, color: 'white'}}>nd</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell,{flexDirection: 'row'}]}>
          <Text style={styles.text}>x</Text><Text style={{fontSize: 15, lineHeight: 15, color: 'white'}}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell,{flexDirection: 'row'}]}>
          <Text style={styles.text}>x</Text><Text style={{fontSize: 15, lineHeight: 15, color: 'white'}}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell,{flexDirection: 'row'}]}>
          <Text style={styles.text}>x</Text><Text style={{fontSize: 15, lineHeight: 15, color: 'white'}}>y</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell,{flexDirection: 'row'}]}>
          <Text style={styles.text}>e</Text><Text style={{fontSize: 15, lineHeight: 15, color: 'white'}}>x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell,{flexDirection: 'row'}]}>
          <Text style={styles.text}>10</Text><Text style={{fontSize: 15, lineHeight: 15, color: 'white'}}>x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, {backgroundColor: '#7c7d7d'}]}>
          <Text style={styles.text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, {backgroundColor: '#7c7d7d'}]}>
          <Text style={styles.text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, {backgroundColor: '#7c7d7d'}]}>
          <Text style={styles.text}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, styles.colorF]}>
          <Text style={styles.text}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>1/x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>&#8730;x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>&#8731;x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell,{flexDirection: 'row'}]}>
          <Text style={{fontSize: 15, lineHeight: 15, color: 'white'}}>y</Text>
          <Text style={styles.text}>&#8730;x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>ln</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell,{flexDirection: 'row'}]}>
          <Text style={styles.text}>log</Text>
          <Text style={{fontSize: 15, lineHeight: 45, color: 'white'}}>10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, {backgroundColor: '#7c7d7d'}]}>
          <Text style={styles.text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, {backgroundColor: '#7c7d7d'}]}>
          <Text style={styles.text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, {backgroundColor: '#7c7d7d'}]}>
          <Text style={styles.text}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, styles.colorF]}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>x!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>sin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>cos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>tan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>e</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>EE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, {backgroundColor: '#7c7d7d'}]}>
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, {backgroundColor: '#7c7d7d'}]}>
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, {backgroundColor: '#7c7d7d'}]}>
          <Text style={styles.text}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, styles.colorF]}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>Rad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>sinh</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>cosh</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>tanh</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>&pi;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.text}>Rand</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, {width: '20%',backgroundColor: '#7c7d7d' }]}>
          <Text style={styles.text}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.cell, {backgroundColor: '#7c7d7d'}]}>
          <Text style={styles.text}>,</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell, styles.colorF]}>
          <Text style={styles.text}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  view : {
    backgroundColor: 'red',
    flexDirection: 'column',
    flex: 1

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
    borderColor: '#48494b'
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
