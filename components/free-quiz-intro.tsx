import React from "react";
import { makeStyles } from "@rneui/themed";
import { View, ImageBackground } from "react-native";

import { FreeQuiz } from "../types/quiz";
import { Typography } from "../elements/typography";

interface FreeQuizIntroProps {
  quiz: FreeQuiz;
}

export const FreeQuizIntro: React.FC<FreeQuizIntroProps> = (props) => {
  const styles = useStyles(props);
  const { quiz } = props;
  if (!quiz) {
    return null;
  }
  return (
    <View style={[styles.container, styles.shadow]}>
      <ImageBackground
        source={quiz.quizImage}
        style={styles.innerImage}
        resizeMode="contain"
      >
        <View style={styles.innerText}>
          <Typography type="subHeading" bold>
            {quiz.name}
          </Typography>
          <Typography
            type="normal"
            overrideStyle={{ marginTop: 5, marginBottom: 5 }}
          >
            {quiz.totalQuizes} available . {quiz.completedQuizes} completed
          </Typography>
        </View>
      </ImageBackground>
    </View>
  );
};

const useStyles = makeStyles((theme: any, props: FreeQuizIntroProps) => ({
  container: {
    borderRadius: 15,
    width: "100%",
    marginTop: 20,
    height: 70,
    borderWidth: 1,
    borderColor: props.quiz.backgroundColor,
    backgroundColor: props.quiz.backgroundColor,
    justifyContent: "space-between",
    alignContent: "center",
    position: "relative",
  },
  innerText: {
    justifyContent: "center",
    flex: 1,
    paddingTop: 0,
    paddingLeft: 0,
  },
  innerImage: {
    top: -11,
    right: -25,
    height: "140%",
  },
  shadow: {
    shadowColor: theme.colors.shadowColor,
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
  },
}));
