import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import Course from "./src/screens/Course";
import UserData from "./src/screens/UserData";
import CourseDetails from "./src/screens/CourseDetails";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="course"
          component={Course}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "Courses",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="student"
          component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "Students Data",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="about"
          component={About}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "About",
            headerTitleAlign: "center",
          }}
        />
         <Stack.Screen
          name="CourseDetails"
          component={CourseDetails}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
