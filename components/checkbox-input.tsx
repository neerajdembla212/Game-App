import React from "react";
import { CheckBox } from "@rneui/themed";
import { GestureResponderEvent } from "react-native";
import { makeStyles } from "@rneui/themed";

interface CheckboxProps {
  value: boolean;
  onChange: () => void;
  disabled?: boolean;
  text: string;
}
export const CheckboxInput: React.FC<CheckboxProps> = (props) => {
  const {
    value = false,
    onChange = () => {},
    disabled = false,
    text = "",
  } = props;
  const styles = useStyles(props);
  function onCheckboxPress(event: GestureResponderEvent) {
    console.log("checkbox pressed ");
    onChange();
  }
  return (
    <CheckBox
      containerStyle={styles.container}
      textStyle={styles.textStyle}
      title={text}
      checked={value}
      onPress={onCheckboxPress}
      checkedColor="white"
    />
  );
};

const useStyles = makeStyles((theme: any, props: CheckboxProps) => ({
  container: {
    backgroundColor: "transparent",
    margin: 0,
    marginLeft: 0,
  },
  textStyle: {
    color: theme.colors.white,
    fontWeight: "400",
  },
}));
