import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'


const index_buoi6 = () => {
let arr: number[] = []
for (let i = 0; i <101; i++) {
    arr.push(i)
}
  return (
    <ScrollView >
      {arr.map((item, index) => {
        return( 
            <View style={styles.square} key={index}>
                <Text >{item}</Text>
            </View>
      );
    })}
    </ScrollView>
  )
}

export default index_buoi6

const styles = StyleSheet.create({
    square: {
        backgroundColor:'red',
        padding: 10,
        margin: 10
    }
})