import React from "react";
import { makeStyles } from "@rneui/themed";
import { View } from "react-native";

import { QuizDetail } from "../types/quiz";
import { QuizStartHeader } from "../components/quiz-start-header";
import { QuizStartTimeRemaining } from "../components/quiz-start-time-remaining";

interface QuizStartContainerProps {
  quiz: QuizDetail;
}
export const QuizStartContainer: React.FC<QuizStartContainerProps> = (
  props
) => {
  const styles = useStyles(props);
  const { quiz } = props;
  return (
    <View style={styles.container}>
      <QuizStartHeader
        userCount={quiz.viewerCount}
        onMuteUnmute={() => {}}
        onQuitQuiz={() => {}}
      />
      <QuizStartTimeRemaining quizTime={quiz.quizTime} />
    </View>
  );
};

const useStyles = makeStyles((theme: any, props: QuizStartContainerProps) => ({
  container: {
    height: "100%",
    flexGrow: 1,
    flex: 1,
    alignContent: "space-between",
    paddingTop: 70,
    paddingLeft: 20,
  },
}));
