import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({ el, deleteHandler }) {
  return (
    <TouchableOpacity style={styles.task} onPress={() => deleteHandler(el.key)}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  task: {

  },
    text: {
        color: "#AA96DA",
        fontSize: 20,
        padding: 10,
        textAlign: "center",
        borderRadius: 7,
        borderColor: "#AA96DA",
        backgroundColor: "white",
        borderWidth: 1,
        marginTop: 20,
        width: "60%",
        marginLeft: "20%",
  }
});