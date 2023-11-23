import {Image, ScrollView, Text, View} from "react-native";
import {DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import logo from '../assets/quiz.png'

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView contentContainerStyle={styles.contentContainer} >
            <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold', padding: 20,textAlign:'center'}}>Quiz App</Text>
            <Image style={{width: 150, height: 150, margin: 20, alignSelf: 'center'}} source={logo} />
            <View style={{width: '100%', height: 1, backgroundColor: 'black', marginBottom: 5}}></View>
            <ScrollView>
                <DrawerItemList   {...props} />
            </ScrollView>
        </DrawerContentScrollView>
    )
}
const styles = {
    contentContainer: {
        padding: 10,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        // width: '100%',
        textAlign: 'center'
    }
}
export default CustomDrawer
