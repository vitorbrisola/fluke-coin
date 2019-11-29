import React from "react";
import { Platform, StatusBar } from "react-native";

import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';


import HomeScreen from './pages/home'
import ExplorerScreen from './pages/explorer'
import RegisterScreen from "./pages/signUp";
import SignIn from "./pages/SignIn";
import ProfileScreen from "./pages/Profile"



const rootNavigator = (signedIn = false) => {
  console.log('root '+signedIn)
  return (createAppContainer(createRootNavigator(signedIn)));
};
export default rootNavigator;


export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {screen: SignedIn},
      SignedOut: {screen: SignedOut}
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};

export const SignedIn = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "Principal",
    }},
  Explorer: {
    screen: ExplorerScreen,
    navigationOptions: {
      tabBarLabel: "Explorar",
    }},
  Profile: {
    screen:ProfileScreen,
    navigationOptions: {
      tabBarLabel: "Perfil",
    }}
});

export const SignedOut = createStackNavigator({
  SignIn: {
    screen: SignIn
  },
  SignUp: {screen: RegisterScreen}
});
