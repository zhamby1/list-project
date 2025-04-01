import React, {useState, useEffect} from "react";
import { Text, View, FlatList, Button, TextInput } from "react-native";
import styles from "./styles";






export default function App() {

//create a state variable to hold the data using useState for our data
  const [data, setData] = useState([
    { id: "1", name: "Apple"},
    { id: "2", name: "Bananas"},
    { id: "3", name: "Orange"},
    { id: "4", name: "Grape"},
  ])

  //create a searchbox that allows us to filter data
  //we create a search text state because it can change depending on what the user types in
  //our data can also change, we will use a filteredData state to hold the data that we want to display and change
  //initial state of our data is our data array above

  const [searchText, setSearchText] = useState("")
  const [filteredData, setFilteredData] = useState(data)

  //create a function that will filter the data...we will take in some text from our search bar and filter out search results by the text
  const handleSearch = (text) => {
    setSearchText(text)
    const filtered = data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
    setFilteredData(filtered)

  }


 

  return (
    <View style={styles.container}>

      <TextInput
        placeholder="Search..."
        value={searchText}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
        />
     

    </View>
  );
}