import React from "react";
import { View, Image } from "react-native";
import { makeStyles } from "@rneui/themed";
import { Typography } from "./typography";
import { Button } from "./button";

interface SsoAuthProps {
  style: any;
}
export const SsoAuth: React.FC<SsoAuthProps> = (props) => {
  const styles = useStyles(props);

  return (
    <View style={{ marginBottom: 30, padding: 20, justifyContent: "center" }}>
      <View style={styles.lineWithText}>
        <View style={styles.line}></View>
        <Typography type="small" overrideStyle={styles.centerText} bold={true}>
          Or sign up with
        </Typography>
        <View style={styles.line}></View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          type="secondary"
          onPress={() => {}}
          borderRadius={true}
          overrideStyles={styles.ssoButton}
        >
          <Image
            source={require("../assets/facebook.png")}
            style={{ width: 25, height: 25, marginRight: 5 }}
          />
          Facebook
        </Button>
        <Button
          type="secondary"
          onPress={() => {}}
          borderRadius={true}
          overrideStyles={styles.ssoButton}
        >
          <Image
            source={require("../assets/google.png")}
            style={{ width: 25, height: 25, marginRight: 5 }}
          />
          Google
        </Button>
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme: any, props: SsoAuthProps) => ({
  lineWithText: {
    flexDirection: "row",
    alignItems: "center",
  },
  centerText: {
    alignSelf: "center",
    backgroundColor: theme.colors.primary,
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: 10,
    paddingRight: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.grey1,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  ssoButton: {
    paddingLeft: 20,
    paddingRight: 20,
    width: "auto",
  },
}));
