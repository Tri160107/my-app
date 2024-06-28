import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

const btvn_4 = () => {
    let arr: string[] = []
    for (let i = 0; i <101; i++) {
        arr.push('Ảnh')}
  return (
    <ScrollView style={styles.container}>
      <View style={styles.square}>
        <Image style={{ width: "100%", height: 80 }}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}></Image>
      </View>
      <View style={styles.view}>
      {arr.map((item, index) => {
        return( 
            <View style={styles.square1} key={index}>
                <Text >{item}</Text>
              <View style= {styles.square2}>
                <Text style ={styles.text1}>Ten anh</Text>
              </View>
            </View>
      );
    })}
    </View>
    </ScrollView>

  );
};

export default btvn_4;

const styles = StyleSheet.create({
container: {},
  view: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  square: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 100,
    padding: 20,
  },
  text: {
    color: "white",
  },
  square1: {
    backgroundColor: 'green',
    
    margin: 20,
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '40%'
  }, 
  square2: {
    backgroundColor: 'grey',
    width: '100%',
    height: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: 'white'
  }
});