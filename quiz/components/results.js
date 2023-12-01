import {View, Text, TouchableOpacity} from "react-native";
import RowResult from "./rowResult";

const Results = () => {

    const results = [
        {
            "nick": "Marek",
            "score": 18,
            "total": 20,
            "type": "historia",
            "date": "2022-11-22"
        },
        {
            "nick": "Jaruś",
            "score": 3,
            "total": 20,
            "type": "wos",
            "date": "2020-01-22"
        },
        {
            "nick": "Bartek",
            "score": 20,
            "total": 20,
            "type": "biologia",
            "date": "2022-04-2"
        },
        {
            "nick": "Krystian",
            "score": 18,
            "total": 20,
            "type": "geografia",
            "date": "2021-11-11"
        },
        {
            "nick": "Antonina",
            "score": 11,
            "total": 20,
            "type": "historia",
            "date": "2022-11-22"
        }
    ]

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
            {results.map((data, index) => {
                return (
                    <RowResult key={index} nick={data.nick} score={data.score} total={data.total} type={data.type} date={data.date} />
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
