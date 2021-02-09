import React, {useState} from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'

const CounterScreen = () =>  {
    const[counter, setCounter ] = useState(0)
   
    return(
       <View>
         <Text  style= {styles.text}> Welcome to Counters </Text>
         
             <Button title="Increase" onPress= {()=> {
                setCounter(counter + 1)
                 
             }} />
             
            <Button title = "Decrease" onPress ={() => {
                setCounter(counter-1)
            }} /> 
            <Text style={styles.text}> Current Count : {counter} </Text>
       </View>
    )
    
}

const styles = StyleSheet.create({
  text:{
      fontSize:20,
      marginBottom:10,
      color:'red',
      textAlign:'center '
      
  }
}) 
export default CounterScreen