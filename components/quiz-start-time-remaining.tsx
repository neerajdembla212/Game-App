import React from "react";
import { makeStyles } from "@rneui/themed";
import { Typography } from "../elements/typography";
import { View } from "react-native";

interface QuizStartTimeRemainingProps {
  minutes: number;
  seconds: number;
}

export const QuizStartTimeRemaining: React.FC<QuizStartTimeRemainingProps> = (
  props
) => {
  const { minutes, seconds } = props;
  const styles = useStyles(props);
  return (
    <View style={styles.container}>
      <Typography type="large" overrideStyle={styles.text}>
        Game Starting: {minutes < 10 ? "0" : ""}
        {minutes} : {seconds < 10 ? "0" : ""}
        {seconds}
      </Typography>
    </View>
  );
};

const useStyles = makeStyles(
  (theme: any, props: QuizStartTimeRemainingProps) => ({
    container: {
      alignSelf: "center",
      margin: 10,
    },
    text: {
      color: theme.colors.secondary,
      fontWeight: "700",
    },
  })
);
