import React from "react";
import { makeStyles, Divider } from "@rneui/themed";
import { View, ScrollView } from "react-native";
import { QuizHomeHeader } from "../components/quiz-home-header";
import { UpcomingQuizesContainer } from "../components/upcoming-quizes-container";
import { FreeQuizesContainer } from "../components/free-quizes-container";

interface HomeProps {
  navigation: any;
}

export const HomeScreen: React.FC<HomeProps> = (props) => {
  const styles = useStyles(props);
  return (
    <>
      <QuizHomeHeader containerStyles={styles.header} />
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
