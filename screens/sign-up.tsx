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

import { Typography } from "../elements/typography";
import { TextInput } from "../elements/text-input";
import { CheckboxInput } from "../elements/checkbox-input";
import { Button } from "../elements/button";
import { SsoAuth } from "../elements/sso-auth";
import { RootStackParams } from "../types/route-stack-params";

type SignupProps = NativeStackScreenProps<RootStackParams, "Sign up">;
export const SignupScreen: React.FC<SignupProps> = (props) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [termsAndCondition, setTermsAndCondition] = useState(false);
  const styles = useStyles(props);
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
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={styles.container}
    >
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={styles.inner}>
            <Typography
              bold={true}
              type="title"
              overrideStyle={{ marginBottom: 20 }}
            >
              Create account
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
                Mobile number
              </Typography>
              <TextInput
                value={phone}
                onChange={onChangePhone}
                placeholder="Enter your mobile number"
                keyboardType="numeric"
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
                value={termsAndCondition}
                onChange={onChangeTermsAndCondition}
                text="I agree to the terms and conditions"
              />
            </View>
            <Button
              onPress={() => {
                props.navigation.navigate("Login");
              }}
              type="primary"
              overrideStyles={styles.button}
              fullWidth={true}
              borderRadius={true}
            >
              Create account
            </Button>
          </View>
        </KeyboardAvoidingView>
        <SsoAuth
          style={{ marginBottom: 30, padding: 20, justifyContent: "center" }}
        />
      </View>
    </TouchableWithoutFeedback>
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
