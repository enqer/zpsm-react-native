import {Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const QuizResult= (props) => {
    const nav = useNavigation()
    return(
        <View style={{height: '100%',alignContent: 'center', justifyContent: 'center',  }}>
            <Text style={{fontSize: 40,color: 'black', textAlign: 'center'}}>Koniec!</Text>
            <Text style={{fontSize: 32,color: 'black', textAlign: 'center'}}>Twój wynik to {props.score}/{props.maxScore}</Text>
            <View>
                <TouchableOpacity style={{backgroundColor: 'orange', margin: 40, padding: 10, borderRadius: 10}} onPress={() => nav.navigate("results")}>
                    <Text style={{fontSize: 22, textAlign: 'center', color: 'black'}}>Sprawdź wszystkie wyniki</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}
export default QuizResult
