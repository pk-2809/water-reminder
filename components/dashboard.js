import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function Dashboard() {

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainText}>Hii Dashboard</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    mainContainer:{
        flex:1,
        width:'100%',
        height:'100%',
        alignItems:'center',
        backgroundColor:'#aaa'
    },
    mainText:{
        fontSize:20,
        color:'white'
    }
});