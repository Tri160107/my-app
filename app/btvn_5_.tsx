import { FlatList, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Character, character } from "./data_3";
import Ionicons from "react-native-vector-icons/Ionicons";

const btvn_5: React.FC<{
  data: Character[];
}> = ({ data }) => {
  const [characters, setCharacters] = useState(character);
  const [searchText, setSearchText] = useState("");

  const addMoreCharacter = () => {
    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000) + 1,
      name: "New Character", 
      date_of_birth: "Unknown",
      height: "Unknown",
      image: "https://via.placeholder.com/100",
      movies: ["New Movie 1", "New Movie 2"],
      award: ["New Award 1"],
      film_image: "https://via.placeholder.com/100",
      film_images: "https://via.placeholder.com/100"
    };

    setCharacters([...characters, newCharacter]);
  };

  const deleteCharacter = (id: number) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  const filteredData = characters.filter((item) => {
    const searchTextLower = searchText.toLowerCase();
    return (
      item.name.toLowerCase().includes(searchTextLower) ||
      item.id.toString().includes(searchTextLower)
    );
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button title="Add More" onPress={addMoreCharacter} />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <View style={styles.topRow}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.image}
                />
                <View style={styles.infoContainer}>
                  <Text>{item.id}</Text>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.dateOfBirth}>{item.date_of_birth}</Text>
                  <Text style={styles.height}>{item.height}</Text>
                </View>
                <TouchableOpacity onPress={() => deleteCharacter(item.id)}>
                  <Ionicons name="trash" size={24} color="red" />
                </TouchableOpacity>
              </View>
              <View style={styles.bottomRow}>
                <View style={styles.moviesAwardsContainer}>
                  <Text style={styles.movies}>{item.movies.join(", ")}</Text>
                  <Text style={styles.award}>{item.award.join(", ")}</Text>
                </View>
                <View style={styles.imagesContainer}>
                  <Image
                    source={{ uri: item.film_image }}
                    style={styles.filmImage}
                  />
                  <Image
                    source={{ uri: item.film_images }}
                    style={styles.filmImage}
                  />
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default btvn_5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  searchBar: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  topRow: {
    flexDirection: "row",
    marginBottom: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  infoContainer: {
    justifyContent: "center",
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
  },
  dateOfBirth: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  height: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  moviesAwardsContainer: {
    flex: 1,
    paddingRight: 15,
  },
  movies: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  award: {
    fontSize: 16,
    color: "#666",
  },
  imagesContainer: {
    flexDirection: "row",
  },
  filmImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginLeft: 10,
  },
});
