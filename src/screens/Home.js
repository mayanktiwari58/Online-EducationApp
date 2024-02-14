import { Text, StyleSheet, View, Image } from "react-native";
import React from "react";
import Menu from "../Component/Menu";

const Home = () => {
  const discription =
    "The Online educational application is simply software that allows and facilitates virtual teaching. It is not just for students but also for applicants, educators,and anyone who wants to further their education or improve their skills.";

  return (
    <View style={styles.Maincontainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          source={{
            uri: "https://bismarckstate.edu/Uploads/featureImage/8757/5kidscybersecurity.jpg",
          }}
        />
        <Text style={styles.mainHeader}>Welcome to </Text>
        <Text
          style={[
            styles.mainHeader,
            {
              fontSize: 28,
              color: "#4c5dab",
              marginTop: 0,
            },
          ]}
        >
          Online Education App
        </Text>
        <Text style={styles.paraStyle}>{discription}</Text>
      </View>
      <View>
        <Menu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Maincontainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 80,
  },
  headerImage: {
    height: "40%",
    width: "100%",
    display: "flex",
    alignItems: "stretch",
    borderRadius: 10,
  },
  mainHeader: {
    marginTop: 40,
    fontSize: 28,
    color: "#344055",
    textTransform: "uppercase",
  },
  paraStyle: {
    textAlign: "left",
    fontSize: 15,
    color: "#7d7d7d",
    marginTop: 20,
    paddingBottom: 40,
    lineHeight: 26,
  },
});

export default Home;
