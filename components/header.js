import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#AA96DA",
    padding: 15, 
    alignItems: "center", 
    justifyContent: "center", 
  },
  text: {
    color: "white",
    fontSize: 30,
  },
});
