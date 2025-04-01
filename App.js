import React, {useState, useEffect} from "react";
import { Text, View, FlatList, Button } from "react-native";
import styles from "./styles";






export default function App() {

//create a state variable to hold the data using useState for our data
  const [data, setData] = useState([
    { id: "1", name: "Diana"},
    { id: "2", name: "Charlie"},
    { id: "3", name: "Eli"},
  ])

//we are going to make a state for our asc and desc order to sort
//we are goign to use useState for this, because this allows us to change the state of our list order from asc to desc within the app

  const [sortOrder, setSortOrder] = useState("asc")

  //we have to create a function that sorts our data... this function will take in the data array useState variable above
  //we will copy the data array into a new array and then sort it using the sort method built into javascript instead on hand-coding the sorting algorithm

  const sortData = () =>{
    //copy the data array into a new array
    const newData = [...data]
    //call the sort method/function to sort our array
    //the way sort works is it takes in two parameters..we often call them a and b.  a and b are two elements that will be compared to each other as it loops through the array.  a represents the current element and b represents the next element
    //lets say we have an array with [3,9,1,4,5]
    //the sort method will compare 3 and 9.  if 3 is less than 9, it will keep 3 in the same position and move on to the next element.  if 3 is greater than 9, it will swap the position of 3 and 9
    newData.sort((a,b)=>{
      if(sortOrder === "asc"){
        //if the sort order is ascending, we will compare a and b.  if a is less than b, we will keep a in the same position and move on to the next element.  if a is greater than b, we will swap the position of a and b
        return a.name.localeCompare(b.name)      
        }
      else{
        return b.name.localeCompare(a.name)
      }
  
      }
    )

    //set the data that we sorted to be the new data of our array.
    setData(newData)
    //set sortOrder to be the opposite of what it was before..so if we click and it is ascending, it will change to descending and vice versa
    //you can use an if-else or a tenary operator to do this..we will use a ternary because it is just a if-else statement in one line
    //if sortOrder is equal to asc then set to to desc, else set it to asc
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  

  }

  //we have created our sort function, but we need to call it at some point.  we can do this through a button press if we wish, but we still have to load it in an inital state (asc or desc)

  //this is where useEffect comes in because when can run the function as soon as the page loads by using useEffect

  useEffect(()=>{
    sortData()
  },[])
  //the useEffect function takes in two parameters..the first is the function we want to run..in this case, sortData.  the second parameter is an array of dependencies...what this determines is when should useEffect run, as we can tie it to a stateful variable as well.  if the array is empty, the function will run as soon as the page loads.  if we put a variable in the array, the function will run everytime that variable changes

  return (
    <View style={styles.container}>
      <Text onPress={sortData}>Click to sort</Text>
      <FlatList
        data = {data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      />

    </View>
  );
}