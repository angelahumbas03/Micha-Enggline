import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ComponentScreen from './screens/ComponentScreen';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

import { createStackNavigator, createAppContainer } from 'react-navigation';


const navigator = createStackNavigator({
  Component: ComponentScreen,
  Home: HomeScreen,
  About: AboutScreen


},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'Pakaian Adat Sulut APP'
  }
});

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
