import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ScrollView,
    RefreshControl,

    SafeAreaView
} from "react-native";
import RowResult from "./rowResult";
import React, {useCallback, useEffect, useState} from 'react';

const Results = () => {




    const [res, setRes] = useState([])

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = (() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    });

    useEffect(() => {
        fetch('https://tgryl.pl/quiz/results')
            .then(response => response.json())
            .then(data => setRes(data)
            )
            .catch(error => {
                console.log(error);
            });
    }, [refreshing])

    return(
        <View style={{flexDirection: 'column', alignItems: 'center', marginTop: 20, width: '100%'}}>
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
            {/*{results.map((data, index) => {*/}
            {/*    return (*/}
            {/*        <RowResult key={index} nick={data.nick} score={data.score} total={data.total} type={data.type} date={data.date} />*/}
            {/*    )*/}
            {/*})}*/}
            {/*<ScrollView horizontal={false}>*/}
                <ScrollView horizontal={true} contentContainerStyle={{width: '100%', flex: 1,}}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={() => onRefresh()} />
                    }>
                <FlatList data={res} renderItem={({item}) => <RowResult  nick={item.nick} score={item.score} total={item.total} type={item.type} date={(item.createdOn).substring(0,10)} /> }/>
                </ScrollView>
            {/*</ScrollView>*/}
        </View>
    )
}

const styles = {
    btn :{
        borderWidth: 1,
        backgroundColor: 'grey',
        padding: 15,
        width: '25%'
    },
    text : {
        color: 'black'
    }
}
export default Results
