import React, {useState} from 'react'
import {View, Text, Button, StyleSheet , Image } from 'react-native'

const ColorScreen = () => {
    const colors = [

    ] = useState([])
    console.log(colors)
    return(
        <View>
            <Text>
                These are some random colors
            </Text>
            <Button title='Change Color'  onPress = {() => {

            }}/>
        </View>
    )
}

export default ColorScreen