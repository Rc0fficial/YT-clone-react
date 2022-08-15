import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Preview } from "../organisms";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    overflow: "scroll",
    justifyContent: "center",
    paddingTop: 50
  },
  hovered: {
    opacity: 0.5
  }
});

export const VideoList = () => {
  return (
    <View style={styles.container}>
      {Array(12)
        .fill(0)
        .map((index) => (
          <Preview />
        ))}
    </View>
  );
};
