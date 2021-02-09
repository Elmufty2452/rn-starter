import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>HELLO DRAQULA</Text>
      <Button
        style = {styles.Button}
        onPress={() => navigation.navigate('Components')}
        title = "Go to Components Demo"
      />
      <Button
        style = {styles.Button}
        onPress = {() => navigation.navigate('List')}
        title = "Go to List Demo"
      />
      <Button
        style = {styles.Button}
        onPress = {() => navigation.navigate('Image')}
        title = "Go to Image Demo"
      />
      <Button
        style = {styles.Button}
        onPress = {() => navigation.navigate('Counter')}
        title = "Go to Counter Demo"
      />
      <Button
        style = {styles.Button}
        onPress = {() => navigation.navigate('Colors')}
        title = "Go to Colors Demo"
      />

    </View>
    )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    color:'red',
    marginBottom:10 
    
  },
  Button: {
    buttonMarginBottom:50 
  }
});

export default HomeScreen;
