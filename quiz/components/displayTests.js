import {TouchableOpacity, View} from "react-native";
import TestCard from "./testCard";
import {useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";


const DisplayTests = ({navigation}) => {
    const nav = useNavigation()
    // const nav = navigation
    const arr = [1,2,3,4,5]
    const [tests,setTests]= useState([])

    useEffect(() =>{

        fetch('https://tgryl.pl/quiz/tests')
            .then(response => response.json())
            .then(data => {
                {
                    setTests(data)
                    console.log(tests)
                }
            })
            .catch(error => {
                console.error(error);
            });

    },[] );

    return(
        <View>
            {tests.map((t,index) =>{
                return(
                    <TouchableOpacity key={index}
                                      onPress={() => nav.navigate(t.name, {id: t.id})}
                    >
                        <TestCard name={t.name} tags={t.tags} desc={t.description} level={t.level} numOfTasks={t.numberOfTasks} index={index}  />
                    </TouchableOpacity>

                )}
            )}
        </View>
    )
}

export default DisplayTests
