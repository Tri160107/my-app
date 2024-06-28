import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Character, character } from "./data_3";

const btvn_5: React.FC<{
  data: Character[];
}> = ({ data }) => {
  return (
    <FlatList
      data={character}
      renderItem={({ item }) => {
        return (
          <View style={styles.container}>
            <View style={styles.container1}>
              <Image
                source={{ uri: item.image }}
                style={styles.image}
              ></Image>
              <View style={styles.container4}>
                <Text>{item.movies.join(", ")}</Text>
                <Text>{item.award.join(", ")}</Text>
              </View>
            </View>
            <View style={styles.container3}>
              <Text >{item.name}</Text>
              <Text>{item.date_of_birth}</Text>
              <Text>{item.height}</Text>
            </View>
          </View>
        );
      }}
    />
  );
};

export default btvn_5;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  container1: {
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start",
  },
  container3: {
    marginTop: 10,
    alignItems: "flex-start",
  },
  container4: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: 100,
    height: 100,
  }
  
});
