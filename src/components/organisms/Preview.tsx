import React, { useRef } from "react";
import { Pressable, Button, View, StyleSheet, Animated } from "react-native";
import { Hoverable } from "react-native-web-hover";
import { Thumbnail } from "../atoms";
import { Info } from "../molecules";

const styles = StyleSheet.create({
  container: {
    margin: 8,
    width: 300,
    backgroundColor: "#ecf0f1"
  },
  hovered: {
    opacity: 0.5
  },
  buttonContainer: {
    padding: 10,
    flexDirection: "column",
    gap: 5
  }
});

export const Preview = () => {
  const zoom = useRef(new Animated.Value(0)).current;
  const [zoomed, setZoomed] = React.useState(false);

  const zoomIn = () => {
    setZoomed(false);
    Animated.timing(zoom, {
      toValue: 1,
      useNativeDriver: false
    }).start();
  };

  const zoomOut = () => {
    setZoomed(true);
    Animated.timing(zoom, {
      toValue: 1.3,
      useNativeDriver: false
    }).start();
  };

  return (
    <Hoverable
      style={[styles.container, zoomed ? { zIndex: 2 } : { zIndex: 1 }]}
    >
      {({ hovered }) => {
        hovered ? zoomOut() : zoomIn();
        return (
          <Animated.View
            style={[
              {
                transform: [{ scale: zoom }],
                backgroundColor: "#ecf0f1"
              }
            ]}
          >
            <Pressable>
              <Thumbnail uri="https://picsum.photos/200/300" />
              <Info />
              {hovered ? (
                <View style={styles.buttonContainer}>
                  <Button title="WATCH LATER" />
                  <Button title="Add TO QUEUE" />
                </View>
              ) : null}
            </Pressable>
          </Animated.View>
        );
      }}
    </Hoverable>
  );
};
