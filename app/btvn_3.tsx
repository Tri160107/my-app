import { StyleSheet, Text, View } from "react-native";
import React from "react";

const btvn_3 = () => {
  let a: number = 5;
  const b = 2;
  let c: string;
  if (a % b === 0) {
    c = "a is an even number";
  } else {
    c = "a is an odd number";
  }
  console.log(c);
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.text}>{c}</Text>
      </View>
    </View>
  );
};

export default btvn_3;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "red",
  },
  text: {
    fontSize: 50,
    textAlign: "center",
    color: "white",
  },
});
