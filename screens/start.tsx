import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { Typography } from "../components/typography";
import { Button } from "../components/button";

const backgroundImage = require("../assets/bg_startPage.png");

interface StartScreenProps {
  navigation: any;
}
export const StartScreen: React.FC<StartScreenProps> = ({ navigation }) => {
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
              text="The game is on."
              type="heading"
              bold={true}
              overrideStyle={{ width: "70%" }}
            ></Typography>
            <Typography
              text="Test your wits with our daily live quiz shows and win cash! Free quizzes of a variety of themes updated daily for all you brainiacs out there."
              type="normal"
            ></Typography>
            <Button
              text="Sign up"
              onPress={() => {
                navigation.navigate("Sign up");
              }}
              type="primary"
              overrideStyles={styles.button}
              fullWidth={true}
              borderRadius={true}
            />
          </View>
          <View style={styles.disclaimer}>
            <Typography
              text="Already have an account? "
              type="normal"
              color="#C4C4C4"
            ></Typography>
            <Typography
              text="Log in."
              type="normal"
              bold={true}
              onPress={() => navigation.navigate('Login')}
            ></Typography>
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
