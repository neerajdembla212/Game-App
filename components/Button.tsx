import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";

interface ButtonProps {
  onPress: (e: GestureResponderEvent) => void;
  text: string;
  type: "primary" | "outline" | "link" | "default";
  overrideStyles?: any;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  text,
  type,
  overrideStyles = {},
  fullWidth = false,
}) => {
  function getButtonStyle() {
    let additionalStyles = {
      ...styles.button,
      ...overrideStyles,
    };
    if (fullWidth) {
      additionalStyles = {
        ...additionalStyles,
        ...styles.fullWidth,
      };
    }
    switch (type) {
      case "primary":
        return { ...styles.primaryButton, ...additionalStyles };
    }
  }
  return (
    <TouchableOpacity style={getButtonStyle()} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    textAlign: "center",
    width: 100,
  },
  fullWidth: {
    width: "100%",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  primaryButton: {
    backgroundColor: "#F9DC30",
    color: "#000000",
    textAlign: "center",
    borderRadius: 30,
  },
});
