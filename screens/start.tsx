import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Typography } from "../elements/typography";
import { Button } from "../elements/button";
import { RootStackParams } from "../types/route-stack-params";

const backgroundImage = require("../assets/bg_startPage.png");

type StartScreenProps = NativeStackScreenProps<RootStackParams, "Start">;
export const StartScreen: React.FC<StartScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Typography
              type="heading"
              bold={true}
              overrideStyle={{ width: "70%" }}
            >
              The game is on.
            </Typography>
            <Typography type="normal">
              Test your wits with our daily live quiz shows and win cash! Free
              quizzes of a variety of themes updated daily for all you brainiacs
              out there.
            </Typography>
            <Button
              onPress={() => {
                props.navigation.navigate("Sign up");
              }}
              type="primary"
              overrideStyles={styles.button}
              fullWidth={true}
              borderRadius={true}
            >
              Sign up
            </Button>
          </View>
          <View style={styles.disclaimer}>
            <Typography type="normal" color="#C4C4C4">
              Already have an account?{" "}
            </Typography>
            <Typography
              type="normal"
              bold={true}
              onPress={() => props.navigation.navigate("Login")}
            >
              Log in.
            </Typography>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: "10%",
    marginTop: "75%",
  },
  disclaimer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  disclaimerText: {
    color: "#C4C4C4",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 48,
    color: "#FFFFFF",
    fontWeight: "bold",
    lineHeight: 50,
    marginBottom: 10,
  },
  textContainer: {
    padding: 20,
  },
  smallText: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 20,
  },
  button: {
    height: 50,
    alignSelf: "center",
    marginTop: 30,
  },
});
