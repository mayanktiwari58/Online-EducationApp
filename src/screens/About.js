import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Mayank Tiwari</Text>
      <Text style={styles.parastyle}>I am Fronted Developer</Text>

      <View>
        <Image
          style={styles.imgstyle}
          source={require("../../assets/myPics.jpg")}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubheader}>About me</Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          I am Mayank Tiwari , Experienced Software Developer with 1 Years of
          hands-on experience in ReactJS ,React-Native,Java and good knowledge of
          Data Structure. Able to work with scrum methodology to accomplish
          project milestones in a specific timeframe , with ability to learn new
          concepts.
        </Text>
      </View>

      <Text style={styles.mainHeader}>Follow on my Socail Network</Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/accounts/login/")
          }
        >
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHlvdXR1YmUlMjBsb2dvfGVufDB8fDB8fHww",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/accounts/login/")
          }
        >
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5zdGFncmFtfGVufDB8fDB8fHww",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/accounts/login/")
          }
        >
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHdpdHRlcnxlbnwwfHwwfHx8MA%3D%3D",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer:{
    display:"flex",
    alignItems:"center",
    
  },
  imgstyle:{
    width:150,
    height:150,
    borderRadius:100,
    marginTop:20
  },
  mainHeader:{
    fontSize:18,
    color:"#344055",
    textTransform:"uppercase",
    marginTop:30,
    marginBottom:10,
  },
  paraStyle:{
    fontSize:17,
    color:"#7d7d7d",
    paddingBottom:30,
  },

  aboutLayout:{
    backgroundColor:"#4c5dab",
    paddingHorizontal:20,
    marginVertical:30,
  },
  aboutSubheader:{
    fontSize:18,
    color:"#fff",
    textTransform:"uppercase",
    marginVertical:15,
    alignSelf:"center",
  },
  aboutPara:{
    color:"#fff",
  },
 menuContainer:{
  width:"100%",
  flexDirection:"row",
  justifyContent:"space-evenly",
 },
 iconStyle:{
  marginTop:20,
  width:"100%",
  height:50,
  aspectRatio:1,
  borderRadius:10,
 }
});

export default About;
