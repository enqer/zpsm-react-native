import {Text, View} from "react-native";

const RowResult = (props) => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'center', flex: 1,}}>
            <View style={styles.btn}><Text style={styles.text}>{props.nick}</Text></View>
            <View style={styles.btn}><Text style={styles.text}>{props.score}/{props.total}</Text></View>
            <View style={styles.btn}><Text style={styles.text}>{props.type}</Text></View>
            <View style={styles.btn}><Text style={styles.text}>{props.date}</Text></View>
        </View>
    )
}
const styles = {
    btn :{
        borderWidth: 1,
        // backgroundColor: 'grey',
        paddingLeft: 5,
        paddingBottom: 10,
        paddingTop: 10,
        width: '25%',

    },
    text :{
        color: 'black',
        fontSize: 12
    }
}
export default RowResult
