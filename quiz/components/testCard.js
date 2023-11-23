import {Text, View} from "react-native";


const TestCard = (props) => {
    return(
        <View key={props.index} style={styles.container}>
            <Text style={[styles.text, {fontSize: 18}]}>Title test #{props.name}</Text>
            <Text style={[styles.text, {color: 'blue'}]}>#Top1</Text>
            <Text style={[styles.text, {}]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores blanditiis </Text>
        </View>
    )

}

const styles ={
    container :{
        margin: 15,
        padding: 15,
        borderWidth: 1,
        // backgroundColor: 'blue'
    },
    text :{
        margin: 3,
        color: 'black',
        fontSize: 12
    }
}
export default TestCard
