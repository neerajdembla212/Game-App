import React, { useEffect, useState } from "react";
import { makeStyles } from "@rneui/themed";
import { View } from "react-native";

import { Typography } from "../elements/typography";
import { QuizIntro } from "../components/quiz-intro";
import { MOCK_UPCOMING_QUIZES } from "../mocks/upcoming-quizes";
import { Quiz } from "../types/quiz";

export const UpcomingQuizesContainer = () => {
  const [upcomingQuizes, setUpcomingQuizes] = useState<Quiz[]>([]);
  const styles = useStyles();
  useEffect(() => {
    const intervalId = setTimeout(() => {
      setUpcomingQuizes(MOCK_UPCOMING_QUIZES);
    }, 3000);
    return () => clearTimeout(intervalId);
  }, []);

  function getQuizCards() {
    return upcomingQuizes.map((quiz) => (
      <QuizIntro key={quiz.id} quiz={quiz} />
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
        Upcoming quiz shows
      </Typography>
      {getQuizCards()}
    </View>
  );
};

const useStyles = makeStyles((theme: any) => ({
  heading: {
    fontSize: 24,
    lineHeight: 30,
  },
  container: {
    backgroundColor: theme.colors.white,
    padding: 20,
  },
}));
