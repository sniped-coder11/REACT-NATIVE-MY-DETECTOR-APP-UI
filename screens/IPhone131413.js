import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const IPhone131413 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone131473}>
      <View style={styles.iphone131473Child} />
      <View style={styles.scanQrCodeParent}>
        <Text style={[styles.scanQrCode, styles.scanPosition]}>
          Scan QR Code
        </Text>
        <Image
          style={styles.jamqrCodeIcon}
          contentFit="cover"
          source={require("../assets/jamqrcode.png")}
        />
      </View>
      <Image
        style={[styles.teenyiconsleftOutline, styles.teenyiconsleftLayout]}
        contentFit="cover"
        source={require("../assets/teenyiconsleftoutline.png")}
      />
      <Image
        style={[styles.teenyiconsleftOutline1, styles.teenyiconsleftLayout]}
        contentFit="cover"
        source={require("../assets/teenyiconsleftoutline1.png")}
      />
      <Image
        style={[styles.teenyiconsleftOutline2, styles.teenyiconsleftPosition]}
        contentFit="cover"
        source={require("../assets/teenyiconsleftoutline7.png")}
      />
      <Image
        style={[styles.teenyiconsleftOutline3, styles.teenyiconsleftPosition]}
        contentFit="cover"
        source={require("../assets/teenyiconsleftoutline3.png")}
      />
      <Image
        style={styles.iphone131473Item}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Text style={[styles.scanYourQr, styles.scanPosition]}>
        Scan Your QR Code
      </Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Pressable
          style={[styles.image18, styles.imageLayout]}
          onPress={() => navigation.navigate("IPhone13147")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-18.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.image19, styles.imageLayout]}
          onPress={() => navigation.navigate("IPhone13145")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-19.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.image20, styles.imageLayout]}
          onPress={() => navigation.navigate("IPhone131416")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-20.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.image21, styles.imageLayout]}
          onPress={() => navigation.navigate("IPhone13148")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-21.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.scanYourQr, styles.scanPosition]}>
        Scan Your QR Code
      </Text>
      <View style={styles.iphone131473Child} />
      <Image
        style={[styles.teenyiconsleftOutline, styles.teenyiconsleftLayout]}
        contentFit="cover"
        source={require("../assets/teenyiconsleftoutline.png")}
      />
      <View style={styles.scanQrCodeParent}>
        <Text style={[styles.scanQrCode, styles.scanPosition]}>
          Scan QR Code
        </Text>
        <Image
          style={styles.jamqrCodeIcon}
          contentFit="cover"
          source={require("../assets/jamqrcode.png")}
        />
      </View>
      <Image
        style={[styles.teenyiconsleftOutline1, styles.teenyiconsleftLayout]}
        contentFit="cover"
        source={require("../assets/teenyiconsleftoutline1.png")}
      />
      <Image
        style={styles.iphone131473Item}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Pressable
        style={styles.whatsappImage20240605At1}
        onPress={() => navigation.navigate("IPhone131412")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/whatsapp-image-20240605-at-1144-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  scanPosition: {
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibreSemiBold,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  teenyiconsleftLayout: {
    height: 67,
    width: 67,
    position: "absolute",
    overflow: "hidden",
  },
  teenyiconsleftPosition: {
    top: 468,
    height: 67,
    width: 67,
    position: "absolute",
    overflow: "hidden",
  },
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
  iphone131473Child: {
    top: 580,
    left: 36,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorGray_100,
    width: 319,
    height: 63,
    position: "absolute",
  },
  scanQrCode: {
    marginTop: -16.5,
    marginLeft: -69.5,
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    width: 180,
    height: 28,
  },
  jamqrCodeIcon: {
    width: 33,
    left: 0,
    top: 0,
    height: 33,
    position: "absolute",
    overflow: "hidden",
  },
  scanQrCodeParent: {
    marginTop: 173,
    marginLeft: -110,
    width: 221,
    height: 33,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  teenyiconsleftOutline: {
    top: 213,
    left: 37,
  },
  teenyiconsleftOutline1: {
    top: 215,
    left: 290,
  },
  teenyiconsleftOutline2: {
    left: 292,
  },
  teenyiconsleftOutline3: {
    left: 38,
  },
  iphone131473Item: {
    height: "0.12%",
    width: "61.28%",
    top: "58.65%",
    right: "18.46%",
    bottom: "41.23%",
    left: "20.26%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  scanYourQr: {
    marginTop: -287,
    marginLeft: -159,
    fontSize: FontSize.size_23xl,
    color: Color.colorWhite,
    width: 348,
    height: 47,
  },
  groupChild: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_200,
    top: 0,
    width: 390,
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
  whatsappImage20240605At1: {
    left: 113,
    top: 260,
    width: 165,
    height: 221,
    position: "absolute",
  },
  iphone131473: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone131413;