//import liraries
import React from "react";
import { Image, StyleSheet } from "react-native";
import { moderateScale } from "../styles/responsiveSize";

const RoundImg = ({ size = 1, image, style = {styles,logo}}) => {

    return (
    <Image
      source={{ uri: image }}
      style={{width: 26, height: 28}}
      resizeMode="contain"
    />
  );
};
const styles = StyleSheet.create ({
    logo:{
       width: "20",
        height: "20"
    }
});

export default RoundImg;
