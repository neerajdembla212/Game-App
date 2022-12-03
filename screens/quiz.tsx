import React, { useEffect, useState } from "react";
import { ImageBackground, Image } from "react-native";
import { makeStyles } from "@rneui/themed";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { QuizDetail } from "../types/quiz";
import { getQuizDetail } from "../mocks/quiz-detail";
import { QuizStartHeader } from "../components/quiz-start-header";
import { RootStackParams } from "../types/route-stack-params";
import { QuizLoadContainer } from "../components/quiz-load-container";

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
      <Image
        source={require("../assets/themeTitle_PopCulture.png")}
        style={styles.quizTitle}
      />
      <QuizStartHeader
        userCount={quizDetail.viewerCount}
        onMuteUnmute={() => {}}
        onQuitQuiz={() => {}}
        style={styles.header}
      />
      <QuizLoadContainer quizTime={quizDetail.quizTime} />
    </ImageBackground>
  );
};

const useStyles = makeStyles((theme: any, props: QuizProps) => ({
  backgroundImage: {
    flex: 1,
  },
  header: {
    paddingTop: 0,
    paddingLeft: "10%",
    top: '-10%'
  },
  quizTitle: {
    top: "20%",
    left: "10%"
  },
}));
