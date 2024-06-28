import { StyleSheet, Text, View, ViewBase } from "react-native";
import React from "react";

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <View style={styles.row1_column1}></View>
        <View style={styles.row1_column2}></View>
      </View>
      <View style={styles.row2}>
        <View style={styles.row2_column1}></View>
        <View style={styles.row2_column2}></View>
      </View>
      <View style={styles.row4}>
        <View style={styles.row4_column1}></View>
        <View style={styles.row4_column2}>
          <View style={styles.row4_column21}></View>
          <View style={styles.row4_column22}></View>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  row1: {
    flexDirection: "row",
    columnGap: 20,
    padding: 20,
    backgroundColor: "black",
  },
  row1_column1: {
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
  row1_column2: {
    width: 50,
    height: 50,
    flex: 1,
    backgroundColor: "blue",
  },
  row2: {
    flexDirection: "row",
    marginTop: 20,
  },
  row2_column1: {
    width: 50,
    height: 50,
    backgroundColor: "yellow",
    flex: 1,
  },
  row2_column2: {
    width: 50,
    height: 50,
    backgroundColor: "pink",
    flex: 1,
  },
  row4: {
    flexDirection: "row",
  },
  row4_column1: {
    width: 50,
    height: 100,
    backgroundColor: "orange",
  },
  row4_column2: {
    flexDirection: "column",
    flex: 1,
  },
  row4_column21: {
    height: 50,
    backgroundColor: "yellow",
  },
  row4_column22: {
    height: 50,
    backgroundColor: "green",
  },
});
