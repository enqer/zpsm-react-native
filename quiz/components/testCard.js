import {Text, View} from "react-native";


const TestCard = (props) => {
    return(
        <View key={props.index} style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={[styles.text, {fontSize: 18}]}>{props.name}</Text>
                <Text style={[styles.text, {fontSize: 12}]}>Pytań:{props.numOfTasks}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                {props.tags.map((tag,index) => {
                    return(
                        <Text key={index} style={[styles.text, {color: 'blue'}]}>{tag}</Text>
                    )
                })}
            </View>
            <Text style={[styles.text, {}]}>{props.desc}</Text>
        </View>
    )

}

const styles ={
    container :{
        margin: 10,
        padding: 10,
        borderWidth: 1,
        // backgroundColor: 'blue'
    },
    text :{
        margin: 3,
        color: 'black',
        fontSize: 12,
        fontFamily: 'hadvig'
    }
}
export default TestCard
