import { StyleSheet, Text, View } from "react-native";
import React from "react";

const btvn_1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.square1}>
        <Text style={styles.text1}>Square 1</Text>
      </View>
      <View style={styles.square2}>
        <Text style={styles.text2}>Square 2</Text>
      </View>
      <View style={styles.square3}>
        <Text style={styles.text3}>Square 3</Text>
      </View>
    </View>
  );
};

export default btvn_1;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  square1: {
    height: 50,
    width: 50,
    backgroundColor: "red",
    justifyContent: "center",
    alignContent: "center",
  },
  text1: {
    color: "black",
    textAlign: "center",
    fontSize: 5,
  },
  square2: {
    height: 50,
    width: 50,
    backgroundColor: "red",
    justifyContent: "center",
    alignContent: "center",
  },
  text2: {
    color: "black",
    textAlign: "center",
    fontSize: 5,
  },
  square3: {
    height: 50,
    width: 50,
    backgroundColor: "red",
    justifyContent: "center",
    alignContent: "center",
  },
  text3: {
    color: "black",
    textAlign: "center",
    fontSize: 5,
  },
});
