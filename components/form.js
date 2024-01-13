import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, Text, View } from "react-native";

export default function Form({ addHandler }) {
  const [text, setText] = useState("");

  const onChange = (inputText) => {
    setText(inputText);
  };

  const handleAdd = () => {
    if (text.trim() !== "") {
      addHandler(text);
      setText("");
    } 
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
              placeholder="Впишите задачу..."
              placeholderTextColor="#AA96DA"
        value={text}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleAdd}
      >
        <Text style={styles.buttonText}>Добавить задачу</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
        justifyContent: "center",
        fontSize: 24,
        marginTop: 20,
        borderWidth: 2, 
        borderColor: "#AA96DA",
        borderRadius: 7,
        padding: 10,
        width: "60%",
        alignSelf: "center",
  },
  button: {
      backgroundColor: "#AA96DA",
    padding: 15,
    marginTop: 10,
      borderRadius: 7,
      alignItems: "center",
      width: "60%",
    marginLeft: "20%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
