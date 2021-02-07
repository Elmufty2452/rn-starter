import React from 'react'
import {Text, StyleSheet,View , Button } from 'react-native'; 

const ComponentsScreen = () => {
    const name = 'Abdullah Abdulfatah Omobolaji Amoo'
    return(
        <View> 
            <Text style = {styles.textStyle}>  Getting Started with Expo </Text>
            <Text style = {styles.nextStyle}> My name is {name}</Text>
        </View>

    );  
}
const styles = StyleSheet.create ({
    textStyle:{
        fontSize: 45
    },
    nextStyle:{
        fontSize:20
    }
});

export default ComponentsScreen;