import React from "react";
import { Platform, StatusBar } from "react-native";

import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { FontAwesome } from "react-native-vector-icons";

import HomeScreen from './pages/home'
import ExplorerScreen from './pages/explorer'
import SignUp from "./pages/SignUp";

import SignIn from "./pages_test/SignIn";
import ProfileScreen from "./pages_test/Profile"


export const TabNavigator = createBottomTabNavigator({
    Home: {screen: HomeScreen},
    Explorer: {screen: ExplorerScreen},
});
const rootNavigator = createAppContainer(TabNavigator);
export default rootNavigator;

const headerStyle = {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = createStackNavigator({
  SignUp: {
    screen: SignUp
  },
  SignIn: {
    screen: SignIn
  }
});

export const SignedIn = createBottomTabNavigator({
  Home: {screen: HomeScreen},
  Explorer: {screen: ExplorerScreen},
  Profile: {screen:ProfileScreen}
});

export const createRootNavigator = (signedIn = false) => {
    return createSwitchNavigator(
      {
        SignedIn: {
          screen: SignedIn
        },
        SignedOut: {
          screen: SignedOut
        }
      },
      {
        initialRouteName: signedIn ? "SignedIn" : "SignedOut"
      }
    );
};

export const rootNavigator2 = (signedIn = false) => {
    console.log('root '+signedIn)
    return (createAppContainer(createRootNavigator(signedIn)));
};
