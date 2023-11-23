import {Text, TouchableOpacity, View} from "react-native";

const Test = (props) => {
    // TODO odliczanie czasu i zmienianie szerokości paska od czasu
    const arr = [1,2,3,4]
    return(
        <View style={{width: '90%', alignSelf: 'center', marginTop: 25}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 18, color: 'black'}}>Question 3 of 10</Text>
                <Text style={{fontSize: 18, color: 'black'}}>Time: 28 sec</Text>
            </View>
            <View style={{backgroundColor: 'grey', height: 10, borderRadius: 15, marginTop: 15, borderWidth: 2, padding: 0}}>
                <View style={{backgroundColor: 'white', height: 6, borderRadius: 15, padding:0, margin:0, width: '80%'}}></View>
            </View>
            <View>
                <Text style={{color: 'black', textAlign: 'center', fontSize: 20, marginTop: 10}}>This is some example of something</Text>
                <Text style={{color: 'black', textAlign: 'center', fontSize: 14, padding: 20}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda aut beatae blanditiis, consectetur, consequatur cumque ducimus earum eos fugiat ipsam iure labore obcaecati, odio quam recusandae totam voluptatibus voluptatum?</Text>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', borderWidth: 1}}>
                {arr.map((answer, index) => {
                    return (
                        <TouchableOpacity key={index} style={{width: '30%', padding: 10, borderWidth: 1, borderRadius: 5, margin: 20}}>
                            <Text style={{color: 'black', textAlign: 'center'}}>{answer}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}

export default Test
