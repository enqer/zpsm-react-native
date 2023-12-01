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
import React, {useEffect} from 'react';

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
        },
        {
            "nick": "Antonina",
            "score": 11,
            "total": 20,
            "type": "historia",
            "date": "2022-11-22"
        }
    ]

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);
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
                        <RefreshControl freshing={refreshing} onRefresh={onRefresh} />
                    }>
                <FlatList data={results} renderItem={({item}) => <RowResult  nick={item.nick} score={item.score} total={item.total} type={item.type} date={item.date} /> }/>
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
