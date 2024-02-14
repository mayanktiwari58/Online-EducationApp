import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const Login = ({navigation}) => {
  const [agree, setAgree] = useState(false);
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    if(!userName || !password){
      Alert.alert("Please fill all details");
    }else{
      navigation.navigate("home")
    }
    
  };

  return (
    <View style={styles.container}>
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login Form</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.lables} >Enter your Email</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"mayank@gmail.com"}
          value={userName}
          onChangeText={(actualdata) => setuserName(actualdata)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.lables}>Enter your password</Text>
        <TextInput
          style={styles.inputStyle}
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={(passworddata) => setPassword(passworddata)}
        />
      </View>

      <View style={styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.wrapperText}>
          I have read and agreed with the TC
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          { backgroundColor: agree ? "#4630EB" : "grey" },
        ]}
        disabled={!agree}
        onPress={() => submit()}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    height: "100%",
    paddingHorizental: 30,
    paddingTop: 70,
    backgroundColor: "#fff",
    
  },
  mainHeader: {
    fontSize: 25,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 50,
    paddingBottom: 15,
    textTransform: "capitalize",
    marginRight: 175,
  },
  inputContainer: {
    marginTop: 20,
  },
  lables: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontSize: 18,
    color: "#7d7d7d",
   
  },
  wrapper: {
    marginTop: 60,
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginRight: 50,
  },
  wrapperText: {
    marginLeft: 10,
  },
  buttonStyle: {
    marginTop: 70,
    alignItems: "center",
    height: 50,
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
   
  },
});

export default Login;
