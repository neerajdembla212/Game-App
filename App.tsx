import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import { StartScreen } from "./screens/start";
import { SignupScreen } from "./screens/sign-up";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    circularStd: require("./assets/fonts/circularStd.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Sign up" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "circularStd",
  },
});
