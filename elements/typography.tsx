import React, { FC } from "react";
import { Text, StyleSheet } from "react-native";

interface TypographyProps {
  type: "heading" | "subHeading" | "normal" | "title" | "small" | "medium";
  overrideStyle?: Object;
  bold?: boolean;
  color?: string;
  onPress?: () => void;
}

export const Typography: FC<TypographyProps> = ({
  type,
  children,
  overrideStyle = {},
  bold = false,
  color = "#FFFFFF",
  onPress = () => {},
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
      case "title":
        return {
          ...styles.title,
          ...additionalStyles,
        };
      case "small": {
        return {
          ...styles.small,
          ...additionalStyles,
        };
      }
      case "medium": {
        return {
          ...styles.medium,
          ...additionalStyles,
        };
      }
      default:
        return {
          ...styles.normal,
          ...additionalStyles,
        };
    }
  }
  return (
    <Text style={getStyle()} onPress={onPress}>
      {children}
    </Text>
  );
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
  title: {
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: 46,
  },
  small: {
    fontSize: 13,
    lineHeight: 17,
  },
  medium: {
    fontSize: 20,
    lineHeight: 25,
  },
});
