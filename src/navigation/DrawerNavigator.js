import React from "react";
import { View, StyleSheet } from "react-native";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import { AuthContext } from "../components/context";
import { DarkTheme } from "@react-navigation/native";


export function DrawerContent(props) {
  const paperTheme = useTheme();

  const { signOut, toggleTheme } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1684797288~exp=1684797888~hmac=fc8a0e1a7304bd7c38bda9c1fa1dde5a5c3a324606187b7f554fcb2d71ed4588",
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>John Doe</Title>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="HOME"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="PROFILE"
              onPress={() => {
                props.navigation.navigate("Profile");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="frequently-asked-questions"
                  color={color}
                  size={size}
                />
              )}
              label="FAQs"
              onPress={() => {
                props.navigation.navigate("FAQ");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Feather name="settings" color={color} size={size} />
              )}
              label="SETTINGS"
              onPress={() => {
                props.navigation.navigate("EditProfile");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="credit-card-check" color={color} size={size} />
              )}
              label="PAYMENT"
              onPress={() => {
                props.navigation.navigate("Payment");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="book-online" color={color} size={size} />
              )}
              label="RESERVATION"
              onPress={() => {
                props.navigation.navigate("ReservationScreen");
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
