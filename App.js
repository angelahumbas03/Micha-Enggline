import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';
import PakaianScreen from './screen/PakaianScreen';
import AboutScreen from './screen/AboutScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
  Pakaian: PakaianScreen,
  About: AboutScreen,

},{
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    headerTitle: 'Pakaian Adat'
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
