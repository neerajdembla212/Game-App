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
    <>
      <View style={[styles.container]}>
        <Image
          source={quiz.quizImage}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 150,
            maxHeight: 200,
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
          }}
        />
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
    </>
  );
};

const useStyles = makeStyles((theme: any, props: QuizIntroProps) => ({
  container: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
    backgroundColor: theme.colors.grey3,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "transparent",
  },
}));
