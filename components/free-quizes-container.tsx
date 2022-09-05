import React, { useEffect, useState } from "react";
import { makeStyles } from "@rneui/themed";
import { View } from "react-native";
import { Typography } from "../elements/typography";
import { MOCK_FREE_QUIZES } from "../mocks/free-quizes";
import { FreeQuiz } from "../types/quiz";
import { FreeQuizIntro } from "../components/free-quiz-intro";

export const FreeQuizesContainer = () => {
  const [freeQuizes, setFreeQuizes] = useState<FreeQuiz[]>([]);
  const styles = useStyles();

  useEffect(() => {
    setFreeQuizes(MOCK_FREE_QUIZES);
  }, []);

  function getFreeQuizCards() {
    return freeQuizes.map((quiz) => (
      <FreeQuizIntro key={quiz.id} quiz={quiz} />
    ));
  }

  return (
    <View style={styles.container}>
      <Typography
        type="normal"
        color="black"
        bold
        overrideStyle={styles.heading}
      >
        Free quizzes
      </Typography>
      {getFreeQuizCards()}
    </View>
  );
};

const useStyles = makeStyles((theme: any) => ({
  heading: {
    fontSize: 24,
    lineHeight: 30,
  },
  container: {
    backgroundColor: "#F3ECFF",
    padding: 20,
  },
}));
