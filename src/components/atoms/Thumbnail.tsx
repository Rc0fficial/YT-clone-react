import * as React from "react";
import { StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 170
  }
});

export const Thumbnail = ({ uri }) => {
  return <Image style={styles.logo} resizeMode="cover" source={{ uri }} />;
};
