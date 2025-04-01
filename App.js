import React from "react";
import { Text, View, FlatList } from "react-native";
import styles from "./styles";

const data = [
  { key: "1", value: "First Item" },
  { key: "2", value: "Second Item" },
  { key: "3", value: "Third Item" },
  { key: "4", value: "Fourth Item" },
  { key: "5", value: "Fifth Item" },
];

//we can take the array and map them to a flatlist
//flatlist is a component that takes an array and renders it as a list
//data is an array of objects that we want to render..we grab that from outside the flatlist comoponent
//renderItem is a function that renders the data as individual items on our screen
//we are destructuring the item from the data as individual pieces we are calling "items"
//then using dot notation (.) we can call the individual items properties from the array of objects.
//item is the object that we are rendering
//we are rendering the value of the object
//

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
      />
    </View>
  );
}