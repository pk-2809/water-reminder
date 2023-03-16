import { View, StyleSheet, Image } from "react-native";
import { TextInput, Button } from "@react-native-material/core";

export default function Start() {
    return (
        <View style={styles.mainContainer}>
<Image style={styles.initImg} resizeMode="contain" source={require('../assets/init_img.jpg')}/>
        <View style={styles.nameInput}>
        <TextInput label="Enter your name" variant="outlined" color='#75E6A4' style={styles.input}/>
        <Button style={styles.btn} title ="Press Me" color="#243239" uppercase={false}/>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({

    mainContainer:{
        flex:1,
        width:'100%',
        height:'100%',
        alignItems:'center',
        backgroundColor:'#fff',
    },
    initImg:{
        marginTop:'20%',
        width: '100%',
    height: undefined,
    aspectRatio: 1,
    },
    nameInput:{
        width:'100%',
        padding: 10,
    },
    input: {
        padding: 10,
      },
    btn:{
        // backgroundColor:'red',
        // titleColor:'blue'
    },
    inputFocused: {
        borderColor: 'red',
    },
});