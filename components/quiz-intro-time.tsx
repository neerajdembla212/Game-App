import React from "react";
import { View, Image } from "react-native";
import { makeStyles } from "@rneui/themed";
import { Button } from "../elements/button";
import { Typography } from "../elements/typography";
import { Quiz } from "../types/quiz";

interface QuizIntroTimeProps {
  quiz: Quiz;
}

export const QuizIntroTime: React.FC<QuizIntroTimeProps> = (props) => {
  const styles = useStyles(props);
  return (
    <View style={styles.container}>
      <View style={styles.timeInformation}>
        <Typography type="medium" bold color="black">
          Today, 2pm
        </Typography>
        <Typography type="small" color="black">
          01:02:36 left
        </Typography>
      </View>
      <Button type="link" onPress={() => {}}>
        <Typography type="normal" color="black">
          Share
        </Typography>
        <Image
          source={require("../assets/share.png")}
          style={{ marginLeft: 5 }}
        />
      </Button>
    </View>
  );
};

const useStyles = makeStyles((theme: any, props: QuizIntroTimeProps) => ({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    height: "35%",
    width: "100%",
  },
  timeInformation: {
    justifyContent: "space-around",
    flexDirection: "column",
  },
}));
