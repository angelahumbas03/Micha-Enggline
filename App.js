import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screen/HomeScreen';
import ImageScreen from './screen/ImageScreen';
import PakaianScreen from './screen/PakaianScreen';
import LoginScreen from './screen/LoginScreen';
import VideoScreen from './screen/VideoScreen';
import AboutScreen from './screen/AboutScreen';


import { createStackNavigator, createAppContainer } from 'react-navigation';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Image: ImageScreen,
  Pakaian: PakaianScreen,
  Login: LoginScreen,
  Video: VideoScreen,
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
