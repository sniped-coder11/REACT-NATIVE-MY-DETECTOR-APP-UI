import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Image2 = () => {
  return (
    <ImageBackground
      style={styles.image4Icon}
      resizeMode="cover"
      source={require("../assets/image4.png")}
    />
  );
};

const styles = StyleSheet.create({
  image4Icon: {
    width: 30,
    height: 30,
    transform: [
      {
        rotate: "89deg",
      },
    ],
  },
});

export default Image2;
