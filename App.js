import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
import PakaianScreen from './screens/PakaianScreen';
import DescScreen from './screens/DescScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';


const navigator = createStackNavigator({
  About: AboutScreen,
  Pakaian: PakaianScreen,
  Home: HomeScreen,
  Desc: DescScreen,
},{
  initialRouteName: 'Home',
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
