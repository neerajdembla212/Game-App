import React from "react";
import { makeStyles, Divider } from "@rneui/themed";
import { ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { QuizLandingHeader } from "../components/quiz-landing-header";
import { UpcomingQuizesContainer } from "../components/upcoming-quizes-container";
import { FreeQuizesContainer } from "../components/free-quizes-container";
import { RootStackParams } from "../types/route-stack-params";

type HomeProps = NativeStackScreenProps<RootStackParams, "Home">;

export const HomeScreen: React.FC<HomeProps> = (props) => {
  const styles = useStyles(props);
  return (
    <>
      <QuizLandingHeader containerStyles={styles.header} />
      <Divider />
      <ScrollView style={styles.container}>
        <UpcomingQuizesContainer />
        <FreeQuizesContainer />
      </ScrollView>
    </>
  );
};

const useStyles = makeStyles((theme: any, props: HomeProps) => ({
  header: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 10,
    justifyContent: "center",
    backgroundColor: theme.colors.white,
  },
  container: {
    height: "100%",
    flexGrow: 1,
    flex: 1,
    alignContent: "space-between",
  },
}));
