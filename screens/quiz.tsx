import React, { useEffect, useState } from "react";
import { ImageBackground, View } from "react-native";
import { makeStyles } from "@rneui/themed";

import { Typography } from "../elements/typography";
import { QuizDetail } from "../types/quiz";
import { getQuizDetail } from "../mocks/quiz-detail";

interface QuizProps {
  route: any;
}
export const QuizScreen: React.FC<QuizProps> = (props) => {
  const [quizDetail, setQuizDetail] = useState<QuizDetail>({} as QuizDetail);
  useEffect(() => {
    const quizIntro = props.route.params;
    const quiz = getQuizDetail(quizIntro.id);
    setQuizDetail(quiz);
  }, []);
  const styles = useStyles(props);
  return (
    <ImageBackground
      source={quizDetail.quizBackgroundImage}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Typography type="normal">Quiz screen here</Typography>
      </View>
    </ImageBackground>
  );
};

const useStyles = makeStyles((theme: any, props: QuizProps) => ({
  container: {
    height: "100%",
    flexGrow: 1,
    flex: 1,
    alignContent: "space-between",
    paddingTop: 50,
  },
  backgroundImage: {
    flex: 1,
  },
}));
