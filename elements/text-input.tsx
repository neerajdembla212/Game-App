import React from "react";
import {
  NativeSyntheticEvent,
  TextInput as TextInputReactNative,
  TextInputChangeEventData,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";

interface TextInputProps {
  value: string;
  onChange: (e: string) => void;
  placeholder: string;
  overrideStyle?: any;
  keyboardType?: KeyboardTypeOptions;
  hideText?: boolean;
}
export const TextInput: React.FC<TextInputProps> = ({
  value = "",
  onChange = () => {},
  overrideStyle,
  placeholder = "",
  keyboardType = "default",
  hideText = false,
}) => {
  const textInputStyles = {
    ...styles.input,
    ...overrideStyle,
  };
  return (
    <TextInputReactNative
      value={value}
      onChangeText={onChange}
      style={textInputStyles}
      placeholder={placeholder}
      placeholderTextColor="#FFFFFF"
      keyboardType={keyboardType}
      secureTextEntry={hideText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 10,
    height: 44,
    padding: 10,
    color: "#FFFFFF",
  },
});
