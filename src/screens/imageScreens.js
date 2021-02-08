import React from 'react'
import {Text ,StyleSheet, View} from 'react-native'
import ImageDetails from '../allComponents/imageDetails'

const ImageScreen = () => {
    return(
        <View>
             <ImageDetails title = 'Forest'  imageSource = {require("../../assets/forest.jpg")} scoreRatings = 'Image score - 10' />
             <ImageDetails  title = 'Beach'  imageSource = {require("../../assets/beach.jpg")} scoreRatings = 'Image score - 15' />
             <ImageDetails  title = 'Mountain' imageSource = {require("../../assets/mountain.jpg")} scoreRatings = 'Image score - 17' />
        </View>
        
    )
}
const style = StyleSheet.create({
    
})

export default ImageScreen