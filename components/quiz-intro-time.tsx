import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import { makeStyles } from "@rneui/themed";
import { formatDuration } from "date-fns";

import { Button } from "../elements/button";
import { Typography } from "../elements/typography";
import { Quiz } from "../types/quiz";
import { useShowQuizTimeInfo } from "../hooks/use-show-quiz-time-remaining";

interface QuizIntroTimeProps {
  quiz: Quiz;
}

const TimeInformation: React.FC<QuizIntroTimeProps> = (props) => {
  if (!props.quiz.quizTime) {
    return null;
  }
  const { quiz } = props;
  const { timeInWords, duration } = useShowQuizTimeInfo(quiz.quizTime);
  const styles = useStyles(props);
  function getDurationInWords() {
    if (
      !duration.years &&
      !duration.months &&
      !duration.weeks &&
      !duration.days &&
      !duration.hours &&
      !duration.minutes &&
      !duration.seconds
    ) {
      return "00:00:00 left";
    }
    return formatDuration(duration) + " left";
  }
  return (
    <View style={styles.timeInformation}>
      <Typography type="medium" bold color="black">
        {timeInWords}
      </Typography>
      <Typography type="small" color="black">
        {getDurationInWords()}
      </Typography>
    </View>
  );
};

const ShareButton: React.FC<{ style: any }> = ({ style }) => {
  return (
    <Button type="link" onPress={() => {}} overrideStyles={style}>
      <Typography type="normal" color="black">
        Share
      </Typography>
      <Image
        source={require("../assets/share.png")}
        style={{ marginLeft: 5 }}
      />
    </Button>
  );
};

export const QuizIntroTime: React.FC<QuizIntroTimeProps> = (props) => {
  const styles = useStyles(props);
  return (
    <View style={[styles.container, styles.shadow]}>
      <TimeInformation {...props} />
      <ShareButton style={styles.shareButton} />
    </View>
  );
};

const useStyles = makeStyles((theme: any, props: QuizIntroTimeProps) => ({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    height: 70,
    width: "100%",
    backgroundColor: theme.colors.grey3,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignContent: "stretch",
    alignItems: "stretch",
  },
  timeInformation: {
    justifyContent: "space-between",
    width: "81%",
  },
  shadow: {
    shadowColor: theme.colors.grey2,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 10,
  },
  shareButton: {
    top: -9,
    right: 18,
  },
}));
