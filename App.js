import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ComponentScreen from './screens/ComponentScreen';
import StudentScreen from './screens/StudentScreen';
import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';
import CounterScreen from './screens/CounterScreen';
import TraditionalScreen from './screens/TraditionalScreen';
import LoginScreen from './screens/LoginScreen';


import { createStackNavigator, createAppContainer } from 'react-navigation';

const navigator = createStackNavigator({
  Component: ComponentScreen,
  Student: StudentScreen,
  Home: HomeScreen,
  Image: ImageScreen,
  Counter: CounterScreen,
  Traditional: TraditionalScreen,
  Login: LoginScreen,

},{
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    headerTitle: 'Traditional Online'
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
