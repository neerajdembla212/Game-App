import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import { makeStyles } from "@rneui/themed";

import { Typography } from "../components/typography";
import { TextInput } from "../components/text-input";
import { CheckboxInput } from "../components/checkbox-input";
import { Button } from "../components/button";

interface SignupProps {
  navigation: any;
}
export const SignupScreen: React.FC<SignupProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [termsAndCondition, setTermsAndCondition] = useState(false);
  const styles = useStyles({ navigation });
  function onChangeEmail(text: string) {
    setEmail(text);
  }

  function onChangePhone(text: string) {
    setPhone(text);
  }
  function onChangePassword(text: string) {
    setPassword(text);
  }

  function onChangeTermsAndCondition() {
    setTermsAndCondition(!termsAndCondition);
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View>
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

            <View style={styles.formField}>
              <CheckboxInput
                value={termsAndCondition}
                onChange={onChangeTermsAndCondition}
                text="I agree to the terms and conditions"
              />
            </View>
            <Button
              text="Create account"
              onPress={() => {
                navigation.navigate("Login");
              }}
              type="primary"
              overrideStyles={styles.button}
              fullWidth={true}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const useStyles = makeStyles((theme: any, props: SignupProps) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  inner: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  formField: {
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    height: 50,
    alignSelf: "center",
    marginTop: 10,
  },
}));
