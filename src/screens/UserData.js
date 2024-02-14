import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";

const UserData = () => {
  const [myData, setMyData] = useState([]);

  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const realData = await response.json();
      setMyData(realData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const showUserData = ({ item }) => {
    return (
      <View style={styles.card}>
      <View style={styles.mainContainer}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} source={{ uri: item.image }} />
        </View>
        
        <View >
          <View style={styles.bioDataContainer}>
            <Text style={styles.bioData}>Bio-Data</Text>
            <Text style={styles.idNumber}>
              {item.id < 10 ? `#0${item.id}` : `#{item.id}`}
            </Text>
          </View>

          <View style={styles.mainContain}>
          
            <Text style={styles.myName}>Name:{item.name}</Text>
            <Text style={styles.myName}>Email:{item.email}</Text>
            
            <Text style={styles.myName}>Mobile:{item.mobile}</Text>
           
          </View>
        </View>
      </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.mainHeader}>List of Student</Text>
      <FlatList 
      keyExtractor={(item)=>item.id}
      data={myData} renderItem={showUserData} 
       
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    minHeight:"100%",
    paddingVertical:20,
    backgroundColor: "#ebedee",
    
  },
  card: {
    width: 250,
    height: 359,
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 15,
    alignSelf:"center",
    
  },
  bioDataContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#353535",
   
  },
  idNumber:{
    fontSize:20,
    color:"rgba(255, 255, 255, 0.5)",
  },
  bioData:{
    fontSize:22,
    color:"#fff",
  },
  mainHeader:{
    fontSize:27,
    color:"#a18ce5",
    textAlign:"center",
  },
  imgStyle:{
    width:"100%",
    height:180,
    marginBottom:5,
    
  },
  mainContain:{
    padding:10,
    backgroundColor:"#353535",
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
  },
  myName:{
    fontSize:14,
    color:"#fff",
    marginBottom:10,
    alignSelf:"flex-start",
    textTransform:"capitalize",
  }
});

export default UserData;
