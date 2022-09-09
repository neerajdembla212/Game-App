import React, { useEffect, useState } from "react";
import { ImageBackground } from "react-native";
import { makeStyles } from "@rneui/themed";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { QuizDetail } from "../types/quiz";
import { getQuizDetail } from "../mocks/quiz-detail";
import { QuizStartContainer } from "../components/quiz-start-container";
import { RootStackParams } from "../types/route-stack-params";

type QuizProps = NativeStackScreenProps<RootStackParams, "Quiz">;

export const QuizScreen: React.FC<QuizProps> = (props) => {
  const [quizDetail, setQuizDetail] = useState<QuizDetail>({} as QuizDetail);
  useEffect(() => {
    const quizId = props.route.params.quizId;
    const quiz = getQuizDetail(quizId);
    setQuizDetail(quiz);
  }, []);
  const styles = useStyles(props);
  return (
    <ImageBackground
      source={quizDetail.quizBackgroundImage}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <QuizStartContainer quiz={quizDetail} />
    </ImageBackground>
  );
};

const useStyles = makeStyles((theme: any, props: QuizProps) => ({
  backgroundImage: {
    flex: 1,
  },
}));
