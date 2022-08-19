import React, { FC } from "react";
import { View, Image } from "react-native";
import { makeStyles } from "@rneui/themed";

import { Badge } from "../elements/badge";

export const QuizHomeHeader: FC<{
  containerStyles?: any;
}> = (props) => {
  const styles = useStyles(props);
  const { containerStyles = {} } = props;
  return (
    <View style={containerStyles}>
      <View style={styles.container}>
        <Image
          source={require("../assets/profile.png")}
          style={{ width: 48, height: 48 }}
        />
        <View style={styles.inner}>
          <Badge
            icon={
              <Image
                source={require("../assets/credits.png")}
                style={{ width: 25, height: 25 }}
              />
            }
            displayNumber={100}
            overrideStyles={{ width: 80, marginRight: 20 }}
          />
          <Badge
            icon={
              <Image
                source={require("../assets/life.png")}
                style={{ width: 25, height: 25 }}
              />
            }
            displayNumber={2}
            overrideStyles={{ width: 65 }}
          />
        </View>
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme: any) => ({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 0,
    paddingHorizontal: 0,
    alignItems: "center"
  },
  inner: {
    flexDirection: "row",
  },
}));
