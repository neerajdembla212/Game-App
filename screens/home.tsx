import React from "react";
import { makeStyles, Divider } from "@rneui/themed";
import { View } from "react-native";
import { QuizHomeHeader } from "../components/quiz-home-header";
import { UpcomingQuizesContainer } from "../components/upcoming-quizes-container";

interface HomeProps {}

export const HomeScreen: React.FC<HomeProps> = (props) => {
  const styles = useStyles(props);
  return (
    <>
      <QuizHomeHeader containerStyles={styles.header} />
      <Divider />
      <View style={styles.container}>
        <UpcomingQuizesContainer />
      </View>
    </>
  );
};

const useStyles = makeStyles((theme: any, props: HomeProps) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: 20,
  },
  header: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 10,
    justifyContent: "center",
    backgroundColor: theme.colors.white,
  },
}));
