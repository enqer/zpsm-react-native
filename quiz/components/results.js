import {View, Text, TouchableOpacity} from "react-native";
import RowResult from "./rowResult";

const Results = () => {
    const arr = [1,2,3,4]
    return(
        <View style={{flexDirection: 'column', alignItems: 'center', marginTop: 20}}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text}>▲Nick</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text}>▼Point</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text}>▼Type</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text}>▼Date</Text>
                </TouchableOpacity>
            </View>
            {arr.map((row, index) => {
                return (
                    <RowResult index={index} nick={"asdas"} point={"18/20"} type={"test1"} date={"21-11-2022"} />
                )
            })}
        </View>
    )
}

const styles = {
    btn :{
        borderWidth: 1,
        backgroundColor: 'grey',
        padding: 15,
        width: '20%'
    },
    text : {
        color: 'black'
    }
}
export default Results
