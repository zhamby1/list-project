import React, {useState, useEffect} from "react";
import { Text, View, FlatList, ActivityIndicator } from "react-native";
import styles from "./styles";






export default function App() {

  //grab users from the randomuser.me API
  //first we will create three stateful variables
  //users: to store the users.  default state is an empty array beacause we will take in multiple people

  const [users, setUsers] = useState([]);
  //if loading activity indicator runs..set default state to true
  const [loading, setLoading] = useState(true);
  //error handling becomes a little easier with useState, can we can check to see if an error occurs and change it from true to false
  const [error, setError] = useState(null);

  //we need to fetch the users as soon as the page renders so we can load them.  So we need to run a function that will run as the page runs
  //USEFFECT!!!!
  useEffect(() =>{
    const fetchUsers = async () =>{
      try{
        const response = await fetch("https://randomuser.me/api/?results=20")

        if(!response.ok){
          throw new Error("Something went wrong!")
        }

        const data = await response.json()
        setUsers(data.results)
        setLoading(false)
    
    }
    catch(err){
      setError(err)
      setLoading(false)
    }
  }

   fetchUsers()
  }, [])


  if (loading){
    return(
      <ActivityIndicator size={"large"} color={"dodgerblue"} />
    )

  }

  if(error){
    return(
      <View style={styles.container}>
        <Text>{error.message}</Text>
      </View>
    )
  }

  return(
    <View style={styles.container}>

      <FlatList
      data={users}
      keyExtractor={(item) => item.email}
      renderItem={({item}) => (
        <Text style={styles.item}>
          {item.name.first} {item.name.last}
        </Text>
      )}
      />

    </View>
  )

}
