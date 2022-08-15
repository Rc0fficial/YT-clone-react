import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, IconButton } from "../atoms";
import { Hoverable } from "react-native-web-hover";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingHorizontal: 20
  },
  textCon: {
    width: "85%",
    paddingHorizontal: 10
  },
  title: {
    fontSize: 14,
    fontWeight: "bold"
  },
  subTitle: {
    fontSize: 13,
    color: "gray"
  }
});

export const Info = () => {
  const handleMenuPress = () => {
    console.log("Pressed");
  };
  return (
    <Hoverable
    // style={[styles.container, zoomed ? { zIndex: 2 } : { zIndex: 1 }]}
    >
      {({ hovered }) => {
        return (
          <View style={styles.container}>
            <Avatar uri="https://picsum.photos/200/300" />
            <View style={styles.textCon}>
              <Text style={styles.title}>
                MightyByte React Native Challenge
              </Text>
              <Text style={styles.subTitle}>Fox News</Text>
              <Text style={styles.subTitle}>9m views, 3 months ago</Text>
            </View>
            {hovered ? <IconButton onPress={handleMenuPress} /> : null}
          </View>
        );
      }}
    </Hoverable>
  );
};
