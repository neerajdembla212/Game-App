import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import { makeStyles } from "@rneui/themed";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { TextInput } from "../elements/text-input";
import { Typography } from "../elements/typography";
import { Button } from "../elements/button";
import { CheckboxInput } from "../elements/checkbox-input";
import { SsoAuth } from "../elements/sso-auth";
import { RootStackParams } from "../types/route-stack-params";

type LoginProps = NativeStackScreenProps<RootStackParams, "Login">;

export const LoginScreen: React.FC<LoginProps> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const styles = useStyles(props);

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
              bold={true}
              type="title"
              overrideStyle={{ marginBottom: 20 }}
            >
              Welcome back
            </Typography>
            <View style={styles.formField}>
              <Typography type="normal" overrideStyle={{ marginBottom: 10 }}>
                Email address
              </Typography>
              <TextInput
                value={email}
                onChange={onChangeEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
              />
            </View>
            <View style={styles.formField}>
              <Typography type="normal" overrideStyle={{ marginBottom: 10 }}>
                Password
              </Typography>
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
              onPress={() => {
                props.navigation.navigate("Home");
              }}
              type="primary"
              overrideStyles={styles.button}
              fullWidth={true}
              borderRadius={true}
            >
              Login
            </Button>
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
