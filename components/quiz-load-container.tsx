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

  const GameStarting = () => (
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
          Please ensure you have a stable internet connection before commencing
          quiz
        </Typography>
      </Disclaimer>
    </View>
  );

  const GameCountdown = () => (
    <View style={styles.countdownContainer}>
      <View style={styles.circle}>
        <Typography type="extraLarge" overrideStyle={styles.countdownText}>
          {duration.seconds}
        </Typography>
      </View>
    </View>
  );
  return <>{secondsRemaining > 10 ? <GameStarting /> : <GameCountdown />}</>;
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
    marginTop: 20,
  },
  tipText: {
    flex: 1,
  },
  countdownContainer: {
    top: "20%",
    width: "100%",
    height: 300,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "white",
    left: "50%",
    top: "50%",
    transform: [{ translateX: -100 }, { translateY: -100 }],
    alignItems: "center"
  },
  countdownText: {
    top: "50%",
    transform: [{translateY: -50}]
  },
}));
