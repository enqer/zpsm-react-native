import { Text, TouchableOpacity } from "react-native";


const Przycisk = (props) => {

  return (
    <TouchableOpacity key={props.index} style={props.styleTouchable} disabled={props.disabled} onPress={props.press}>
      <Text style={props.styleText}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default Przycisk;
