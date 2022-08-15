import * as React from "react";
import { Image } from "react-native";

export const Avatar = ({ uri, scale = 40 }) => {
  return (
    <Image
      style={[{ width: scale, height: scale, borderRadius: scale / 2 }]}
      source={{ uri }}
    />
  );
};
