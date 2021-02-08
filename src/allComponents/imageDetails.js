import React from 'react'
import {Text, StyleSheet, View, Image} from 'react-native'

const ImageDetails = ({title, scoreRatings, imageSource}) => {
    
    return (
        <View>
            <Text > {title}</Text>
            <Image source = {imageSource} />
            <Text style = {styles.text}>  {scoreRatings} </Text>
        </View>
        
    )
}
const styles = StyleSheet.create({
  text: {
      fontSize:15,
      color:'red',
      textAlign:'center'
  }
})
export default ImageDetails