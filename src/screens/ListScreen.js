import React from 'react'
import {Text, StyleSheet, View} from  'react-native'
import { FlatList } from 'react-native-gesture-handler'

const ListScreen = () => {
    const names = [
        {
            name:'Friend 1' ,
            age: '20'
        },
        {
            name:'Friend 2',
            age: '45'
        },
        {
            name:'Friend 3',
            age: '15'
        },
        {
            name:'Friend 4',
            age:'21'
        },
    ]; 

    return(
        <FlatList
            vertial
            showsVerticalScrollIndicator = {false}
            keyExtractor = {friend => friend.name} 
            data = {names}
            renderItem ={({item}) => {
              return(
                <Text style= {style.textStyle}> {item.name + " - Age: " + item.age} </Text>
               )
        }}  
        />

    )
}
const style = StyleSheet.create({
    textStyle:{
        marginVertical:100
    }

})
export default ListScreen