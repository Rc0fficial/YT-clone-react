import * as React from "react";
import { View, StyleSheet } from "react-native";
import { VideoList } from "../components/template/VideoList";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  subTitle: {
    margin: 24,
    textAlign: "center"
  }
});

const Home = () => {
  return (
    <View style={styles.container}>
      <VideoList />
    </View>
  );
};

export default Home;
