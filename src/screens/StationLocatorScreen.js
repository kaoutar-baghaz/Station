import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import { COLORS, images } from "../constants/index";
import { moderateScale } from "../styles/responsiveSize";
import { getAddressFromLatLong } from "../utils/helperFunctions";
import { data } from "./data";
import { useTheme } from "@react-navigation/native";

const mapDarkStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#2c2c2c",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#373737",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#3c3c3c",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#4e4e4e",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d",
      },
    ],
  },
];

const mapStandardStyle = [
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];
// create a component
const StatioLocatorScreen = () => {
  const theme = useTheme();
  const [curLoc, setCurLoc] = useState({
    latitude: 14.753256219526882,
    longitude: -17.501356878657052,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [address, setAddress] = useState("");

  const mapRef = useRef(null);

  const onCenter = () => {
    console.log(mapRef);
    mapRef.current.animateToRegion(curLoc);
  };

  const onRegionChange = async (props) => {
    // console.log("props==>>>",props)
    const { latitude, longitude } = props;
    const res = await getAddressFromLatLong(`${latitude}, ${longitude}`);
    // console.log("res==>>>>>", res);
    setAddress(res.address);
  };
  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        customMapStyle={theme.dark ? mapDarkStyle : mapStandardStyle}
        style={StyleSheet.absoluteFill}
        initialRegion={curLoc}
        onRegionChangeComplete={onRegionChange}
      >
        {data.map((val, i) => {
          return (
            <View style={styles.logo}>
              <Marker coordinate={val.coords} image={val.img} />
            </View>
          );
        })}
      </MapView>

      <View style={styles.headerView}></View>
      <View style={styles.bottomView}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={onCenter} style={styles.navigationView}>
            <Image source={images.icNavigation} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  bottomView: {
    position: "absolute",
    bottom: 24,
    left: 24,
    right: 24,
  },
  headerView: {
    position: "absolute",
    top: 36,
    left: 24,
    right: 24,
  },
  navigationView: {
    width: moderateScale(35),
    height: moderateScale(35),
    borderRadius: moderateScale(35 / 2),
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  logo: {
    width: 10,
    height: 10,
  },
});

//make this component available to the app
export default StatioLocatorScreen;
