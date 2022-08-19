import React from "react";
import { makeStyles } from "@rneui/themed";
import { View, Image } from "react-native";
import { Button } from "../elements/button";
import { Quiz } from "../types/quiz";
import { QuizIntroTime } from "./quiz-intro-time";

interface QuizIntroProps {
  quiz: Quiz;
}
export const QuizIntro: React.FC<QuizIntroProps> = (props) => {
  const styles = useStyles(props);
  const { quiz } = props;
  if (!quiz) {
    return null;
  }
  return (
    <View style={[styles.container, styles.shadow]}>
      <Image
        source={quiz.quizImage}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "65%",
          maxHeight: 200,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
        }}
      />
      <View style={{ height: 40 }}>
        {quiz.isVotingRequired && (
          <Button onPress={() => {}} type="primary" fullWidth>
            Cast your vote now
            <Image
              source={require("../assets/forward_arrow.png")}
              style={{
                height: 13,
                width: 15,
                marginLeft: 5,
              }}
            />
          </Button>
        )}
      </View>
      <QuizIntroTime quiz={quiz} />
    </View>
  );
};

const useStyles = makeStyles((theme: any, props: QuizIntroProps) => ({
  container: {
    height: "40%",
    maxHeight: props.quiz.isVotingRequired ? 350 : 220,
    borderRadius: 25,
    width: "100%",
    backgroundColor: theme.colors.white,
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "transparent",
    position: "relative",
    justifyContent: "space-evenly",
  },
  shadow: {
    shadowColor: theme.colors.grey3,
    shadowOffset: { width: 7, height: 7 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
  },
}));
