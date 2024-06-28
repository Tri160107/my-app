import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const index_buoi5 = () => {
  const [text, setText] = useState("Hello");
  return (
    <View>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {
          setText("Clicked");
          console.log(text);
        }}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Enter your name"
        onChangeText={(value) => {
          console.log(value);
        }}
      ></TextInput>
    </View>
  );
};

export default index_buoi5;

const styles = StyleSheet.create({
  touchableOpacity: {
    width: 100,
    height: 100,
    padding: 12,
    margin: 12,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
