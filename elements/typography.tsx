import React, { FC } from "react";
import { Text, StyleSheet } from "react-native";

type typographyTypes =
  | "heading"
  | "subHeading"
  | "normal"
  | "title"
  | "small"
  | "medium"
  | "large";

interface TypographyProps {
  type: typographyTypes;
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
      fontWeight: bold ? "bold" : "normal",
      color,
      ...overrideStyle,
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
      case "large": {
        return {
          ...styles.large,
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
    <Text style={getStyle()} onPress={onPress} suppressHighlighting>
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
  large: {
    color: "#FFFFFF",
    fontSize: 24,
    lineHeight: 30,
  },
  subHeading: {
    color: "#FFFFFF",
    fontSize: 18,
    lineHeight: 23,
  },
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
