import React from "react";
import { View } from "react-native";
import { makeStyles } from "@rneui/themed";

import { Typography } from "./typography";

interface BadgeProps {
  displayNumber: number;
  icon: any;
  overrideStyles?: any;
}
export const Badge: React.FC<BadgeProps> = (props) => {
  const styles = useStyles(props);
  const { icon, displayNumber, overrideStyles = {} } = props;
  return (
    <View style={{ ...styles.container, ...overrideStyles }}>
      {icon}
      <Typography type="normal" bold>
        {displayNumber}
      </Typography>
    </View>
  );
};

const useStyles = makeStyles((theme: any, props: BadgeProps) => ({
  container: {
    height: 40,
    width: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.blue1,
    borderRadius: 48,
  },
}));
