import React from "react";
import { makeStyles } from "@rneui/themed";
import { Typography } from "../elements/typography";
import { useShowQuizTimeInfo } from "../hooks";

interface QuizStartTimeRemainingProps {
  quizTime: Date;
}

export const QuizStartTimeRemaining: React.FC<QuizStartTimeRemainingProps> = (
  props
) => {
  if (!props.quizTime) {
    return null;
  }
  const { minutesRemaining, secondsRemaining } = useShowQuizTimeInfo(
    props.quizTime
  );
  const styles = useStyles(props);

  return (
    <Typography type="title" overrideStyle={styles.text}>
      {minutesRemaining} : {secondsRemaining}
    </Typography>
  );
};

const useStyles = makeStyles(
  (theme: any, props: QuizStartTimeRemainingProps) => ({
    container: {
      height: "100%",
      flexGrow: 1,
      flex: 1,
      alignContent: "space-between",
      paddingTop: 70,
      paddingLeft: 20,
    },
    text: {
      color: theme.colors.secondary,
      fontWeight: "700",
    },
  })
);
