import React from "react";
import { View } from "react-native";
import { makeStyles } from "@rneui/themed";

interface DisclaimerProps {
  children: React.ReactNode;
  overrideStyle?: Object;
}
export const Disclaimer: React.FC<DisclaimerProps> = (props) => {
  const styles = useStyles(props);
  const { children, overrideStyle } = props;
  return <View style={[styles.container, overrideStyle]}>{children}</View>;
};

const useStyles = makeStyles((theme: any, props: DisclaimerProps) => ({
  container: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,    
    color: theme.colors.white,
    justifyContent: "center",
    backgroundColor: theme.colors.blurredPurple,
  },
}));
