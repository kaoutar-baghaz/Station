import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { COLORS, SIZES } from "../constants/index";
import { useTheme } from "@react-navigation/native";

import Swiper from "react-native-swiper";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import StarRating from "../components/StarRating";
import { images } from "../constants";

const Hello = ({ navigation }) => {
  const theme = useTheme();

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
      <View style={styles.containers}>
        <Text style={styles.userName}>Welcome to</Text>
        <Text style={styles.welcomeMessage}>Eydon Petroleum</Text>
      </View>
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={false}
          height={200}
          activeDotColor="#FF6347"
        >
          <View style={styles.slide}>
            <Image
              source={images.img1}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={images.img2}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={images.img3}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate("Lubricants")}
        >
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons name="oil" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>LUBRICANTS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate("Shop")}
        >
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons name="store" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>SHOP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => {
            navigation.navigate("Fuel");
          }}
        >
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons
              name="gas-station"
              size={35}
              color="#FF6347"
            />
          </View>
          <Text style={styles.categoryBtnTxt}>FUEL</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.categoryContainer, { marginTop: 10 }]}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => {
            navigation.navigate("Badge");
          }}
        >
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons
              name="badge-account"
              size={35}
              color="#FF6347"
            />
          </View>
          <Text style={styles.categoryBtnTxt}>BADGE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => {
            navigation.navigate("Dineouts");
          }}
        >
          <View style={styles.categoryIcon}>
            <MaterialIcons name="car-repair" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>DINEOUTS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => {
            navigation.navigate("History");
          }}
        >
          <View style={styles.categoryIcon}>
            <MaterialIcons name="expand-more" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Show More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 18,
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Our Services
        </Text>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={images.img7}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Maintenance</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              Centers are managed in partnership with Speedy France.
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={images.img4}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Shopping</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              The FunX team is at your service, Our shops are permanently open.
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={images.img6}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Lubricants</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              Customers around the world have tested and trusted Havoline engine
              oils.
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={images.img5}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Fuel</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              We give shape to our passion to satisfy our customers.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Hello;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containers: {
    width: "100%",
  },
  userName: {
    // fontFamily: "osr",
    fontSize: SIZES.large,
    color: COLORS.secondary,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  welcomeMessage: {
    // fontFamily: "ossmbi",
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  sliderContainer: {
    height: 200,
    width: "90%",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: "30%",
    marginHorizontal: 0,
    alignSelf: "center",
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 70,
    height: 70,
    backgroundColor: "#fdeae7" /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: "center",
    marginTop: 5,
    color: "#de4f35",
  },
  cardsWrapper: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
    marginBottom: 20,
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontWeight: "bold",
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
  },
});
