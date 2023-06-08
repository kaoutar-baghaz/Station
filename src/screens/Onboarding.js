import React, { useState } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { COLORS, SIZES, images } from "../constants/index";
import { useNavigation } from "@react-navigation/native";

const slides = [
  {
    id: 1,
    title: "Navigate with Ease",
    description:
      '“Navigate with ease using the Eydon Petroleum app, ensuring you never waste time searching for fuel stations again."',
    image: images.onboarding1,
  },
  {
    id: 2,
    title: "Find Fuel Stations Nearby",
    description:
      '“Get directions and fuel up quickly wherever you are, ensuring a hassle-free journey"',
    image: images.onboarding2,
  },
  {
    id: 3,
    title: "Stay Ahead of the Game",
    description:
      '“Never miss out on the best deals and always be informed about the latest offers to save more on your fuel expenses"',
    image: images.onboarding3,
  },
  {
    id: 4,
    title: "Join our community",
    description:
      '“Unlock Exclusive Benefits and elevate your fueling experience to new heights"',
    image: images.onboarding4,
  },
];

export default function Onboarding() {
  const [showHomePage, setShowHomePage] = useState(false);
  const navigation = useNavigation();

  const buttonLabel = (label) => {
    return (
      <View
        style={{
          padding: 12,
        }}
      >
        <Text
          style={{
            color: COLORS.black,
            fontWeight: "600",
            fontSize: SIZES.h4,
          }}
        >
          {label}
        </Text>
      </View>
    );
  };
  const handleDone = () => {
    setShowHomePage(true);
    navigation.navigate("Login");
    // Naviguer vers la page Home lorsque l'utilisateur appuie sur "Done"
  };

  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                padding: 15,
                paddingTop: 100,
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: SIZES.width - 80,
                  height: 400,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontWeight: "bold",
                  color: COLORS.black,
                  fontSize: SIZES.h1,
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  paddingTop: 5,
                  color: COLORS.gray,
                }}
              >
                {item.description}
              </Text>
            </View>
          );
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
          width: 30,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={handleDone}
      />
    );
  }

  return null;
}
