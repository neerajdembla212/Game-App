import React from "react";
import { View, Image } from "react-native";
import { makeStyles } from "@rneui/themed";
import { Typography } from "../elements/typography";

interface QuizStartHeaderProps {
  userCount: number;
  onMuteUnmute: (action: "mute" | "unmute") => void;
  onQuitQuiz: () => void;
}

export const QuizStartHeader: React.FC<QuizStartHeaderProps> = (props) => {
  const styles = useStyles(props);
  const { userCount } = props;
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require("../assets/active_users.png")}
          style={styles.userIconImage}
        ></Image>
        <Typography type="normal" bold>
          {userCount}
        </Typography>
      </View>
      <View style={[styles.iconContainer, styles.userControlsContainer]}>
        <Image
          source={require("../assets/mute.png")}
          style={styles.controlIconImage}
        ></Image>
        <Image
          source={require("../assets/close.png")}
          style={styles.controlIconImage}
        ></Image>
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme: any, props: QuizStartHeaderProps) => ({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 0,
    paddingHorizontal: 0,
    alignItems: "center",
  },
  userIconImage: {
    height: 15,
    width: 15,
    marginRight: 5,
  },
  controlIconImage: {
    height: 17,
    width: 17,
    marginRight: 5,
  },
  iconContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  userControlsContainer: {
    width: "15%",
    justifyContent: "space-between",
    marginRight: 20,
  },
}));
