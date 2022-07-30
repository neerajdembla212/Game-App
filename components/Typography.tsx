import React, { FC } from "react";
import { Text, StyleSheet } from "react-native";

interface TypographyProps {
  type: "heading" | "subHeading" | "normal";
  text: string;
  overrideStyle?: Object;
  bold?: boolean;
  color?: string;
}

export const Typography: FC<TypographyProps> = ({
  type,
  text,
  overrideStyle = {},
  bold = false,
  color = "#FFFFFF",
}) => {
  function getStyle() {
    const additionalStyles = {
      ...overrideStyle,
      fontWeight: bold ? "bold" : "normal",
      color,
    };
    switch (type) {
      case "heading":
        return {
          ...styles.heading,
          ...additionalStyles,
        };
      case "subHeading":
        return {
          ...styles.subHeading,
          ...additionalStyles,
        };
      case "normal":
        return {
          ...styles.normal,
          ...additionalStyles,
        };
      default:
        return {
          ...styles.normal,
          ...additionalStyles,
        };
    }
  }
  return <Text style={getStyle()}>{text}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 48,
    color: "#FFFFFF",
    fontWeight: "bold",
    lineHeight: 50,
    marginBottom: 10,
  },
  normal: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 20,
  },
  subHeading: {},
});
