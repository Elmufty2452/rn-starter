import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>HELLO DRAQULA</Text>
      <Button
        style = {styles.Button}
        onPress = {() => props.navigation.navigate('Components')}
        title = "Go to Components Demo"
      />
      <Button
        style = {styles.Button}
        onPress = {() => props.navigation.navigate('List')}
        title = "Go to List Demo"
      />
      <Button
        style = {styles.Button}
        onPress = {() => props.navigation.navigate('Image')}
        title = "Go to Image Demo"
      />


    </View>
    )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    color:'red'
    
  },
  Button: {
    marginBottom:50
  }
});

export default HomeScreen;
