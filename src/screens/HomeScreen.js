import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>HELLO DRAQULA</Text>
      <Button
        onPress = {() => console.log('Button was pressed')}
        title = "Go to Components Demo"
      />
    </View>
    )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
