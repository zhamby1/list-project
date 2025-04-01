import React from "react";
import { Text, View, FlatList } from "react-native";
import styles from "./styles";

//seeding data or testing with dummy data

const data = [
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
  { id: '3', name: 'Item 3' },
  { id: '4', name: 'Item 4' },
  { id: '5', name: 'Item 5' },
];



  //flatlists can take a few different arguments
  //data: the data you point to that you want to render....usually a data collection/structure like an array or object
  //renderItem: a function that will return the item you want to render...this it the 'view' part of the data or what the data will look like on screen
export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}