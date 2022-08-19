import React from "react";
import { GestureResponderEvent } from "react-native";
import { makeStyles, Button as RneButton, Icon } from "@rneui/themed";

interface ButtonProps {
  onPress: (e: GestureResponderEvent) => void;
  type: "primary" | "secondary" | "link" | "default";
  overrideStyles?: any;
  fullWidth?: boolean;
  borderRadius?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    onPress,
    children,
    overrideStyles = {},
    fullWidth = false,
    borderRadius = true,
    type,
  } = props;
  const styles = useStyles(props);
  return (
    <RneButton
      onPress={onPress}
      buttonStyle={[styles.button, overrideStyles]}
      titleStyle={styles.buttonText}
      type={type === "link" ? "clear" : "solid"}
    >
      {children}
    </RneButton>
  );
};

const useStyles = makeStyles((theme: any, props: ButtonProps) => {
  let buttonStyles = {};
  let buttonTextStyles = {};
  switch (props.type) {
    case "primary":
      buttonStyles = {
        backgroundColor: theme.colors.secondary,
      };
      break;
    case "secondary":
      buttonStyles = {
        backgroundColor: theme.colors.grey0,
      };
      buttonTextStyles = {
        color: theme.colors.black,
        fontWeight: "500",
      };
      break;
    case "link":
      buttonStyles = {
        backgroundColor: "transparent",
      };
      buttonTextStyles = {
        color: theme.colors.secondary,
      };
      break;
  }
  return {
    button: {
      justifyContent: "center",
      textAlign: "center",
      width: props.fullWidth ? "100%" : 100,
      backgroundColor: theme.colors.grey0,
      borderRadius: props.borderRadius ? 30 : 0,
      alignItems: "center",
      padding: 10,
      ...buttonStyles,
    },
    buttonText: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 16,
      color: theme.colors.black,
      ...buttonTextStyles,
    },
  };
});
