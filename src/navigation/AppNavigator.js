import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Signup from "../screens/Signup";

import Login from "../screens/Login";
import Splash from "../screens/Splash";
import Onboarding from "../screens/Onboarding";

const RootStack = createStackNavigator();

const AppNavigator = ({ navigation }) => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Splash" component={Splash} />
      <RootStack.Screen name="Onboarding" component={Onboarding} />
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="Signup" component={Signup} />
    </RootStack.Navigator>
  );
};

export default AppNavigator;

{
  /* <Drawer.Screen name="Splash" component={Splash} />
<Drawer.Screen name="Onboarding" component={Onboarding} /> */
}
