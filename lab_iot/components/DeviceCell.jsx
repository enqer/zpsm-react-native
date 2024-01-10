import { View, Text, TouchableOpacity } from "react-native";
import { Dimensions } from 'react-native'

const halfWindowsWidth = Dimensions.get('window').width / 2.222
const DeviceCell = (props) => {
  return(
    <TouchableOpacity style={{
      width: halfWindowsWidth,
      height: halfWindowsWidth,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      borderWidth: 1,
      backgroundColor: props.color
    }}>
        <Text style={{fontSize: 36, color: 'black',textTransform: 'capitalize', fontFamily: 'asap'}}>{props.name}</Text>
        <Text style={{fontSize: 16, color: 'black', textTransform: 'capitalize'}}>{props.place}</Text>
    </TouchableOpacity>
  )
}
export default DeviceCell
