import * as React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  icon: {
    height: 25,
    width: 8,
    alignSelf: "center"
  }
});

export const IconButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.icon} source={require("../../assets/menu.png")} />
    </TouchableOpacity>
  );
};
