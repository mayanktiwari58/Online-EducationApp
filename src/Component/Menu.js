import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import {useNavigation} from "@react-navigation/native";
import React from 'react'

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity 
      onPress={()=>navigation.navigate("course")}>

        <Image 
        style={styles.iconStyle}
        
          source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYNCGPK2Jufl809EFpag6MpwzJfSQs4rZGA&usqp=CAU",}}
        />
        <Text>Course</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle}
      onPress={()=>navigation.navigate("student")}>
        <Image
          style={styles.iconStyle}
          source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfAVI9-4viAhaAjHwHmmn1ZTt6j62IFZfR5Q&usqp=CAU,"}}
        />
        <Text>UserData</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle}
      onPress={()=>navigation.navigate("about")}>
      <Image
          style={styles.iconStyle}
          source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKBlL7KISkwSG-RuP6S-ZjPTfBOYl_Auic107ielHDNln6iNs0gT11yVHtqSY8r_V4rw&usqp=CAU,"}}
        />
        <Text>About</Text>
      </TouchableOpacity>

      
    </View>
  )
}

const styles = StyleSheet.create({
  menuContainer:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginBottom:40,

  },
  iconStyle:{
    width:"100%",
    height:50,
    aspectRatio:1,
    borderRadius:10,
  },
})

export default Menu


