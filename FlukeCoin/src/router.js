import React from "react";
import { Platform, StatusBar } from "react-native";

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { FontAwesome } from "react-native-vector-icons";

import HomeScreen from './pages/home'
import ExplorerScreen from './pages/explorer'


const TabNavigator = createBottomTabNavigator({
    Home: {screen: HomeScreen},
    Explorer: {screen: ExplorerScreen},
});
  
  
const App = createAppContainer(TabNavigator);
  
export default App;