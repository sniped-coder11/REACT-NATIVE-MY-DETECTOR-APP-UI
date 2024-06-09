import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Image1 = () => {
  return (
    <ImageBackground
      style={styles.image3Icon}
      resizeMode="cover"
      source={require("../assets/image3.png")}
    />
  );
};

const styles = StyleSheet.create({
  image3Icon: {
    width: 50,
    height: 50,
    transform: [
      {
        rotate: "89deg",
      },
    ],
  },
});

export default Image1;
