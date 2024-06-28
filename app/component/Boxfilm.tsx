import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { movies } from "../data_2";
import { ScrollView } from "react-native-gesture-handler";
import Box from "./Box";

const Boxfilm = () => {
  return (
    
    
      <FlatList
        data={movies}
        renderItem={({ item }) => {
          return (
           <Box data={item}></Box>
          );
        }}
      ></FlatList>
   
  );
};

export default Boxfilm;

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  container1: {
    flexDirection: "row",
    gap: 10
  },
  container2: {
    flexDirection: "column",
  },
  container3: {
    flexDirection: 'row',
    gap: 20
  }
});
