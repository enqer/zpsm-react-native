import {Alert, Button, ScrollView, Text, TouchableOpacity, View} from "react-native";
import TestCard from "./testCard";
import {useNavigation} from "@react-navigation/native";
import DisplayTests from "./displayTests";

const Home = () => {
    const nav = useNavigation()

    return(
        <View style={styles.container}>
            <ScrollView>


                <DisplayTests />
                <View style={styles.res}>
                    <Text style={{color:'black', padding: 5, fontSize: 16}}>Get to know your ranking result</Text>
                    <TouchableOpacity style={styles.btn} onPress={() => nav.navigate("results")}>
                        <Text style={{textAlign: 'center', color:'black'}}>
                            Check!
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = {
    container :{
        flexDirection: 'column',
        padding: 15

    },
    res :{
        margin: 'auto',
        borderWidth: 1,
        padding: 10,
        color: 'black',
        flex: 1,
        alignItems: 'center',

    },
    btn :{
        width: '25%',
        backgroundColor: 'grey',
        padding: 10,

    }
}

export default Home
