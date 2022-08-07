import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import { StartScreen } from "./screens/start";
import { SignupScreen } from "./screens/sign-up";
import { LoginScreen } from "./screens/login";
import { HomeScreen } from "./screens/home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  ThemeProvider,
  Button,
  createTheme,
  CreateThemeOptions,
} from "@rneui/themed";

const Stack = createNativeStackNavigator();
const theme = createTheme({
  darkColors: {
    primary: "#5C1DC0",
    secondary: "#F9DC30",
    grey0: "rgba(255, 255, 255, 0.8)",
  },
  lightColors: {
    primary: "#5C1DC0",
    secondary: "#F9DC30",
    grey0: "rgba(255, 255, 255, 0.8)",
  },
});
export default function App() {
  const [fontsLoaded] = useFonts({
    circularStd: require("./assets/fonts/circularStd.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="Sign up" component={SignupScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
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
