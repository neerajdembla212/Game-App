import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { makeStyles } from "@rneui/themed";

interface ButtonProps {
  onPress: (e: GestureResponderEvent) => void;
  text: string;
  type: "primary" | "outline" | "link" | "default";
  overrideStyles?: any;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    onPress,
    text,
    type = "clear",
    overrideStyles = {},
    fullWidth = false,
  } = props;
  const styles = useStyles(props);
  return (
    <>
      <TouchableOpacity
        style={{ ...styles.button, ...overrideStyles }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};

const useStyles = makeStyles((theme: any, props: ButtonProps) => ({
  button: {
    justifyContent: "center",
    textAlign: "center",
    width: props.fullWidth ? "100%" : 100,
    backgroundColor:
      props.type === "primary" ? theme.colors.secondary : theme.colors.grey0,
    color: theme.colors.black,
    borderRadius: 30,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
}));
