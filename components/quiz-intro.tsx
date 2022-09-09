import React from "react";
import { makeStyles } from "@rneui/themed";
import { View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Button } from "../elements/button";
import { Quiz } from "../types/quiz";
import { QuizIntroTime } from "./quiz-intro-time";
import { useIsRoomOpen } from "../hooks";
import { RootStackParams } from "../types/route-stack-params";

type navigationProps = NativeStackScreenProps<RootStackParams, "Home">;
interface QuizIntroProps {
  quiz: Quiz;
}

export const QuizIntro: React.FC<QuizIntroProps> = (props) => {
  const { isRoomOpen } = useIsRoomOpen(props.quiz.quizTime);
  const styles = useStyles(props);
  const { quiz } = props;
  const navigation = useNavigation<navigationProps["navigation"]>();

  function onPressQuiz() {
    if (!isRoomOpen) {
      return;
    }
    navigation.navigate("Quiz", { quizId: quiz.id });
  }

  if (!quiz) {
    return null;
  }
  return (
    <Pressable onPress={onPressQuiz}>
      <View style={[styles.container]}>
        <Image
          source={quiz.quizIntroImage}
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
    </Pressable>
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
