import {TouchableOpacity, View} from "react-native";
import TestCard from "./testCard";
import {useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";
import NetInfo from "@react-native-community/netinfo";
import { createTableTest, getTestsFromDB, addTestToDB} from './sqlite'
import _ from 'lodash';

const DisplayTests = ({navigation}) => {
    const nav = useNavigation()
    // const nav = navigation
    const [tests,setTests]= useState([])

    useEffect(() =>{
        NetInfo.fetch().then((state) => {
            if (state.isConnected){
                fetch('https://tgryl.pl/quiz/tests')
                    .then(response => response.json())
                    .then(data => {
                        {
                            setTests(data)
                            console.log(tests)
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }else {
                const t = getTestsFromDB()
                console.log("log" + t.then((data) =>{
                    // console.log(JSON.parse(data.rows.item(1).json).description)
                    let  arr = []
                    console.log(data.rows.length)
                    for (let i=0;i<data.rows.length;i++){
                        let body = {
                            id: JSON.parse(data.rows.item(i).json).id,
                            description :JSON.parse(data.rows.item(i).json).description,
                            level: JSON.parse(data.rows.item(i).json).level,
                            name: JSON.parse(data.rows.item(i).json).name,
                            tags: JSON.parse(data.rows.item(i).json).tags,
                            tasks: JSON.parse(data.rows.item(i).json).tasks,
                            numberOfTasks: JSON.parse(data.rows.item(i).json).tasks.length
                        }
                        arr.push(body)
                    }
                    setTests(arr)
                }))
            }
        });

    },[] );



    return(
        <View>
            {tests != null ? _.shuffle(tests.map((t,index) =>{
                return(
                    <TouchableOpacity key={index}
                                      onPress={() => nav.navigate(t.name, {id: t.id})}
                    >
                        <TestCard name={t.name} tags={t.tags} desc={t.description} level={t.level} numOfTasks={t.numberOfTasks} index={index}  />
                    </TouchableOpacity>

                )}
            )) : null}
        </View>
    )
}

export default DisplayTests
