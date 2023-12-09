import {Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useEvent} from "react-native-reanimated";
import {useEffect} from "react";

const QuizResult= (props) => {
    const nav = useNavigation()


    // const handlerPostResult = () => {
    //     fetch('https://tgryl.pl/quiz/result', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             nick: props.nick,
    //             score: props.score,
    //             total: props.total,
    //             type: props.type
    //         }),
    //     })
    //         .then((res) => res.json())
    //         .then((result)=>console.log(result))
    //         .catch(console.error)
    // }
    // useEffect(() => {
    //     // handlerPostResult()
    //     // console.log("DATA SENT")
    // },[])


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
