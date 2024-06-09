import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color } from "../GlobalStyles";

const Frame2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Image
        style={styles.basemapImageIcon}
        contentFit="cover"
        source={require("../assets/basemap-image1.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Pressable
          style={[styles.image18, styles.imageLayout]}
          onPress={() => navigation.navigate("IPhone131410")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-18.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.image19, styles.imageLayout]}
          onPress={() => navigation.navigate("IPhone131411")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-19.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.image20, styles.imageLayout]}
          onPress={() => navigation.navigate("IPhone13148")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-20.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.image21, styles.imageLayout]}
          onPress={() => navigation.navigate("IPhone131421")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-21.png")}
          />
        </Pressable>
      </View>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={styles.item}
        contentFit="cover"
        source={require("../assets/group-12.png")}
      />
      <Image
        style={styles.defaultMarkerComponent}
        contentFit="cover"
        source={require("../assets/default-marker-component1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 50,
    width: 390,
    left: 0,
    position: "absolute",
  },
  imageLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  basemapImageIcon: {
    top: -30,
    height: 882,
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_200,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image18: {
    left: 41,
    top: 9,
    height: 30,
    width: 30,
  },
  image19: {
    left: 225,
    top: 9,
    height: 30,
    width: 30,
  },
  image20: {
    left: 318,
    top: 9,
    height: 30,
    width: 30,
  },
  image21: {
    left: 133,
    top: 10,
  },
  rectangleParent: {
    top: 798,
  },
  child: {
    top: 306,
    left: 87,
    width: 276,
    height: 318,
    position: "absolute",
  },
  item: {
    top: 554,
    left: 134,
    width: 21,
    height: 21,
    position: "absolute",
  },
  defaultMarkerComponent: {
    top: 286,
    left: 359,
    width: 16,
    height: 20,
    position: "absolute",
  },
  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame2;
