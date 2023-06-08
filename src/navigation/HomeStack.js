import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import Hello from "../screens/Hello";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme, Avatar } from "react-native-paper";
import { View } from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
import EditProfile from "../screens/EditProfile";
import ProfileScreen from "../screens/ProfileScreen";
import Some from "../screens/Notifications";
import StatioLocatorScreen from "../screens/StationLocatorScreen";
import { COLORS, FONTS, icons, imagesDataURL } from "../constants/index";
import Promotions from "../screens/Promotion";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import FAQ from "../screens/FAQ";
import Payment from "../screens/Payment";
import Services, {
  Badge,
  Dineouts,
  Fuel,
  History,
  Lubricants,
  Shop,
} from "../screens/Services";
import ReservationScreen from "../screens/ReservationScreen";

const HomeStack = createNativeStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const PromotionStack = createStackNavigator();
const ReservationStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="HOME"
      activeColor="black"
      inactiveColor="white"
      barStyle={{
        backgroundColor: COLORS.primary,
        height: 50,
        justifyContent: "center",
        border: 0,
        margin: 0,
        padding: 0,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "HomePage",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarColor: "#694fad",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={StatioLocatorScreen}
        options={{
          tabBarLabel: "Location",
          tabBarColor: "#ff5479",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-location-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Promotion"
        component={PromotionStackScreen}
        options={{
          tabBarLabel: "Promotion",
          tabBarColor: COLORS.black,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add-shopping-cart" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationStackScreen}
        options={{
          tabBarLabel: "Notifications",
          tabBarColor: "#694fad",
          tabBarIcon: ({ color }) => (
            <Icon name="notifications-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.background,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <HomeStack.Screen
        name="The Home"
        component={Hello}
        options={{
          title: "HOME",
          headerTitleAlign: "center",
          headerLeft: () => (
            <View style={{ marginLeft: 0 }}>
              <Icon.Button
                name="ios-menu"
                size={25}
                color={colors.text}
                backgroundColor={COLORS.primary}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 10 }}>
              <TouchableOpacity
                style={{ paddingHorizontal: 10, marginTop: 5 }}
                onPress={() => {
                  navigation.navigate("Profile");
                }}
              >
                <Avatar.Image
                  source={{
                    uri: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1684797288~exp=1684797888~hmac=fc8a0e1a7304bd7c38bda9c1fa1dde5a5c3a324606187b7f554fcb2d71ed4588",
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="Shop"
        component={Shop}
        options={{
          title: "SHOP",
          headerTitleAlign: "center",
        }}
      />
      <HomeStack.Screen
        name="Fuel"
        component={Fuel}
        options={{
          title: "FUEL",
          headerTitleAlign: "center",
        }}
      />

      <HomeStack.Screen
        name="Lubricants"
        component={Lubricants}
        options={{
          title: "LUBRICANTS",
          headerTitleAlign: "center",
        }}
      />
      <HomeStack.Screen
        name="Badge"
        component={Badge}
        options={{
          title: "BADGE",
          headerTitleAlign: "center",
        }}
      />
      <HomeStack.Screen
        name="Dineouts"
        component={Dineouts}
        options={{
          title: "DINEOUTS",
          headerTitleAlign: "center",
        }}
      />
      <HomeStack.Screen
        name="History"
        component={History}
        options={{
          title: "HISTORY",
          headerTitleAlign: "center",
        }}
      />
    </HomeStack.Navigator>
  );
};
const NotificationStackScreen = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <NotificationStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <NotificationStack.Screen
        name="Notif"
        component={Some}
        options={{
          title: "NOTIFICATIONS",
          headerTitleAlign: "center",
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              color={colors.text}
              backgroundColor={COLORS.primary}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </NotificationStack.Navigator>
  );
};

const ProfileStackScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.background,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <ProfileStack.Screen
        name="ProfilePage"
        component={ProfileScreen}
        options={{
          headerTitleAlign: "center",
          title: "PROFILE",
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor={COLORS.primary}
                color={colors.text}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          headerTitleAlign: "center",
          title: "Edit Profile",
        }}
        component={EditProfile}
      />
      <ProfileStack.Screen
        name="ReservationScreen"
        options={{
          headerTitleAlign: "center",
          title: "RESERVATION",
        }}
        component={ReservationScreen}
      />
      <ProfileStack.Screen
        name="FAQ"
        options={{
          headerTitleAlign: "center",
          title: "FAQ",
        }}
        component={FAQ}
      />
      <ProfileStack.Screen
        name="Payment"
        options={{
          headerTitleAlign: "center",
          title: "Payment",
        }}
        component={Payment}
      />
    </ProfileStack.Navigator>
  );
};

const PromotionStackScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <PromotionStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.background,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <PromotionStack.Screen
        name="PromotionPage"
        component={Promotions}
        options={{
          headerTitleAlign: "center",
          title: "PROMOTIONS",
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor={COLORS.primary}
                color={colors.text}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
        }}
      />
    </PromotionStack.Navigator>
  );
};
