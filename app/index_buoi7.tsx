import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

let movie = {
  image:
    "https://product.hstatic.net/200000343865/product/en-bao-tang-bao-boi---tap-1---tb-2023_357f815779f4436f985af8734dab3ba2_cf16f8209b4049d1b52e3c946fc1b4c1_master.jpg",
  name: "Doraemon",
  description: "An adventure with Doraemon and Nobita",
  type: ["funny", "action"],
  score: 5,
  actor: ["A", "B", "C"],
};
const index_buoi7 = () => {
  return (
    <View>
      <Image
        style={{ width: "100%", height: 1000 }}
        source={{
          uri: movie.image,
        }}
      ></Image>
      <Text>{movie.name}</Text>
      <Text>{movie.description}</Text>
      <View>
        {movie.type.map((item, index) => {
          return <Text>{item}</Text>;
        })}
      </View>
        <View>
            {movie.actor.map((item, index) => {
                return (<Text>{item}</Text>);
            })}
        </View>

      <Text>{movie.score}</Text>

    </View>
  );
};

export default index_buoi7;

const styles = StyleSheet.create({});
