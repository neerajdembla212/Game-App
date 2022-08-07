import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import { makeStyles } from "@rneui/themed";

import { TextInput } from "../components/text-input";
import { Typography } from "../components/typography";
import { Button } from "../components/button";
import { CheckboxInput } from "../components/checkbox-input";
import { SsoAuth } from "../components/sso-auth";

interface LoginProps {
  navigation: any;
}
export const LoginScreen: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const styles = useStyles({ navigation });

  function onChangeEmail(text: string) {
    setEmail(text);
  }
  function onChangePassword(text: string) {
    setPassword(text);
  }
  function onChangeRememberMe() {
    setRememberMe(!rememberMe);
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
              text="Welcome back"
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
                value={rememberMe}
                onChange={onChangeRememberMe}
                text="Remember me"
              />
            </View>
            <Button
              text="Login"
              onPress={() => {
                navigation.navigate("Home");
              }}
              type="primary"
              overrideStyles={styles.button}
              fullWidth={true}
              borderRadius={true}
            />
          </View>
          <SsoAuth
            style={{ marginBottom: 30, padding: 20, justifyContent: "center" }}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const useStyles = makeStyles((theme: any, props: LoginProps) => ({
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
    marginTop: 30,
  },
}));
