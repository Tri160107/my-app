import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Movies } from "../data_2";
const Box: React.FC<{
  data: Movies;
}> = ({ data }) => {
  return (
    <View style={styles.box}>
      <View style={styles.container1}>
        <Image
          source={{ uri: data.image }}
          style={{ width: 100, height: 100 }}
        ></Image>
        <View style={styles.container2}>
          <Text>{data.title}</Text>
          <View style={styles.container3}>
            <Text>{data.year}</Text>
            <Text>{data.length}</Text>
            <Text>{data.rate}</Text>
          </View>
          <Text>{data.score}</Text>
        </View>
      </View>
      <Text>{data.description}</Text>
      <Text>{data.category.join(", ")}</Text>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  container1: {
    flexDirection: "row",
    gap: 10,
  },
  container2: {
    flexDirection: "column",
  },
  container3: {
    flexDirection: "row",
    gap: 20,
  },
});
