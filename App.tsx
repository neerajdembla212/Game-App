import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { ThemeProvider, createTheme } from "@rneui/themed";

import { StartScreen } from "./screens/start";
import { SignupScreen } from "./screens/sign-up";
import { LoginScreen } from "./screens/login";
import { HomeScreen } from "./screens/home";
import { QuizScreen } from "./screens/quiz";
import { RootStackParams } from "./types/route-stack-params";

const Stack = createNativeStackNavigator<RootStackParams>();
const theme = createTheme({
  darkColors: {
    primary: "#5C1DC0",
    secondary: "#F9DC30",
    grey0: "rgba(255, 255, 255, 0.8)",
    grey1: "#A2A7AD",
    grey2: "grey",
    grey3: "#F8F8F8",
    blue1: "#3554E8",
    lightPurple: "#F3ECFF",
    shadowColor: "#B3A8A8",
    blurredPurple: "rgba(141, 97, 208, 0.6)",
  },
  lightColors: {
    primary: "#5C1DC0",
    secondary: "#F9DC30",
    grey0: "rgba(255, 255, 255, 0.8)",
    grey1: "#A2A7AD",
    grey2: "grey",
    grey3: "#F8F8F8",
    blue1: "#3554E8",
    lightPurple: "#F3ECFF",
    shadowColor: "#B3A8A8",
    blurredPurple: "rgba(141, 97, 208, 0.6)",
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
              headerShown: false,
            }}
          >
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="Sign up" component={SignupScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Quiz" component={QuizScreen} />
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
