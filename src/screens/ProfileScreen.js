import {
  StyleSheet,
  ScrollView,
  View,
  Button,
  Share,
  Image,
} from "react-native";
import React, { useState } from "react";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { openURL, canOpenURL } from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { images, imagesDataURL, COLORS } from "../constants/index";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

const url =
  "https://www.eydon.com/media/images/edon_station_carburant_rJAlmSI.max-800x800.png";

const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        "Share the Eydon App and win 10% promotion for your next fuel !" +
        "\n" +
        url,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};


const ProfileScreen = ({ navigation }) => {
  const user = {
    avatar: imagesDataURL[0],
    coverPhoto: "https://www.bootdey.com/image/280x280/FF00FF/000000",
    name: "John Smith",
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ width: "100%" }}>
          <Image
            source={images.img1}
            resizeMode="cover"
            style={{
              height: 228,
              width: "100%",
            }}
          />
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={{ uri: user.avatar }}
            resizeMode="contain"
            style={{
              height: 155,
              width: 155,
              borderRadius: 999,
              borderColor: COLORS.primary,
              borderWidth: 2,
              marginTop: -90,
            }}
          />
        </View>
      </View>
      <View style={{ marginTop: 25, alignItems: "center" }}>
        <Title
          style={[
            styles.title,
            {
              marginTop: 15,
              marginBottom: 15,
            },
          ]}
        >
          John Doe
        </Title>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="phone" color={COLORS.secondary} size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            +91-900000009
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color={COLORS.secondary} size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            john_doe@email.com
          </Text>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableOpacity
          title={"Pay"}
          onPress={() => {
            navigation.navigate("Payment");
          }}
        >
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity title={"Share"} onPress={onShare}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableOpacity>
        <TouchableRipple
          onPress={() => {
            navigation.navigate("EditProfile");
          }}
        >
          <View style={styles.menuItem}>
            <Icon name="account-edit" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Edit Your Profile</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            navigation.navigate("FAQ");
          }}
        >
          <View style={styles.menuItem}>
            <Icon name="frequently-asked-questions" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>FAQ</Text>
          </View>
        </TouchableRipple>
      </View>
      <TouchableRipple
        onPress={() => {
          navigation.navigate("ReservationScreen");
        }}
      >
        <View style={styles.menuItem}>
          <MaterialIcons name="book-online" color="#FF6347" size={25} />
          <Text style={styles.menuItemText}>Book Now</Text>
        </View>
      </TouchableRipple>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  userInfoSection: {
    paddingHorizontal: 10,
    marginBottom: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 5,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  button: {
    marginVertical: 10,
  },
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
