import React, {useState} from 'react'
import {View, Text, Button, StyleSheet , Image } from 'react-native'

const ColorScreen = () => {
    const [colors, setColors] = useState([])
    return(
        <View>
            <Button title='Change Color'  onPress = {() => {
                setColors([...colors, randomRgb()])
            }}/> 
        <View style = {{height:100 , width:100, backgroundColor: randomRgb}}/>
            
        </View>
    )
}
const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor (Math.random() * 256);
   
    return `rgb(${red}, ${green} , ${blue})`
}

export default ColorScreen