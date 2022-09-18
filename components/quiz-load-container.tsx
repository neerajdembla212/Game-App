import React from "react";
import { useTheme, makeStyles } from "@rneui/themed";

import { Typography } from "../elements/typography";
import { useShowQuizTimeInfo } from "../hooks/use-show-quiz-time-remaining";
import { QuizStartTimeRemaining } from "./quiz-start-time-remaining";
import { Disclaimer } from "../elements/disclaimer";
import { View } from "react-native";

interface QuizLoadContainerProps {
  quizTime: Date;
}
export const QuizLoadContainer: React.FC<QuizLoadContainerProps> = (props) => {
  const { quizTime } = props;
  if (!quizTime) {
    return null;
  }
  const { duration, secondsRemaining } = useShowQuizTimeInfo(quizTime);
  const { theme } = useTheme();
  const styles = useStyles(props);
  console.log("secondsRemaining ", secondsRemaining);
  return (
    <>
      {secondsRemaining > 10 && (
        <View style={styles.timeLoadContainer}>
          <QuizStartTimeRemaining
            minutes={duration.minutes}
            seconds={duration.seconds}
          />
          <Disclaimer overrideStyle={styles.tip}>
            <Typography
              type="normal"
              color={theme.colors.secondary}
              bold
              overrideStyle={{ textAlign: "center" }}
            >
              Tip:
            </Typography>
            <Typography type="normal" overrideStyle={styles.tipText} bold>
              Please ensure you have a stable internet connection before
              commencing quiz
            </Typography>
          </Disclaimer>
        </View>
      )}
    </>
  );
};

const useStyles = makeStyles((theme: any, prop: QuizLoadContainerProps) => ({
  timeLoadContainer: {
    top: "50%",
    transform: [{ translateY: -50 }],
  },
  tip: {
    width: "90%",
    height: 100,
    transform: [
      {
        translateX: 20,
      },
    ],
    marginTop: 20
  },
  tipText: {
    flex: 1,
  },
}));
