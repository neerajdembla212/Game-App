import React, { useState } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { Typography } from "../components/typography";
import { TextInput } from "../components/text-input";

interface SignupProps {
  navigation: any;
}
export const SignupScreen: React.FC<SignupProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  function onChangeEmail(text: string) {
    setEmail(text);
  }

  function onChangePhone(text: string) {
    setPhone(text);
  }
  function onChangePassword(text: string) {
    setPassword(text);
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Typography
          text="Create account"
          bold={true}
          type="title"
          overrideStyle={{ marginBottom: 20 }}
        />
        <View style={styles.formField}>
          <Typography
            text="Email address"
            type="normal"
            overrideStyle={{ marginBottom: 10 }}
          />
          <TextInput
            value={email}
            onChange={onChangeEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.formField}>
          <Typography
            text="Mobile number"
            type="normal"
            overrideStyle={{ marginBottom: 10 }}
          />
          <TextInput
            value={phone}
            onChange={onChangePhone}
            placeholder="Enter your mobile number"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formField}>
          <Typography
            text="Password"
            type="normal"
            overrideStyle={{ marginBottom: 10 }}
          />
          <TextInput
            value={password}
            onChange={onChangePassword}
            placeholder="Enter your password"
            hideText={true}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5C1DC0",
  },
  formContainer: {
    marginTop: "20%",
    padding: 20,
  },
  formField: {
    marginTop: 10,
    marginBottom: 10,
  },
});
