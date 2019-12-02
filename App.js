import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AboutScreen from './screens/AboutScreen';
import AcehScreen from './screens/AcehScreen';
import BaliScreen from './screens/BaliScreen';
import BantenScreen from './screens/BantenScreen';
import BBScreen from './screens/BBScreen';
import DKIJakartaScreen from './screens/DKIJakartaScreen';
import GorontaloScreen from './screens/GorontaloScreen';
import HomeScreen from './screens/HomeScreen';
import JambiScreen from './screens/JambiScreen';
import JatengScreen from './screens/JatengScreen';
import JatimScreen from './screens/JatimScreen';
import JogjaScreen from './screens/JogjaScreen';
import KalbarScreen from './screens/KalbarScreen';
import LampungScreen from './screens/LampungScreen';
import MalukuScreen from './screens/MalukuScreen';
import NTBScreen from './screens/NTBScreen';
import PakaianScreen from './screens/PakaianScreen';
import PapuaScreen from './screens/PapuaScreen';
import RiauScreen from './screens/RiauScreen';
import SulselScreen from './screens/SulselScreen';
import SultraScreen from './screens/SultraScreen';
import SulutScreen from './screens/SulutScreen';
import SumutScreen from './screens/SumutScreen';
import VideoScreen from './screens/VideoScreen';

import { createStackNavigator, createAppContainer } from 'react-navigation';


const navigator = createStackNavigator({
  About: AboutScreen,
  Pakaian: PakaianScreen,
  Video: VideoScreen,
  Home: HomeScreen,
  Sulut: SulutScreen,
  Sulteng: SultengScreen,
  Sultra: SultraScreen,
  Sulsel: SulselScreen,
  Sumut: SumutScreen,
  DKIJakarta: DKIJakartaScreen,
  Gorontalo: GorontaloScreen,
  Jateng: JatengScreen,
  Jatim: JatimScreen,
  Jambi: JambiScreen,
  Jogja: JogjaScreen,
  Lampung: LampungScreen,
  Maluku: MalukuScreen,
  NTB: NTBScreen,
  Aceh: AcehScreen,
  Papua: PapuaScreen,
  Bali: BaliScreen,
  BB: BBScreen,
  Riau: RiauScreen,
  Banten: BantenScreen,
  Kalbar: KalbarScreen,
  

  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'Pakaian Adat'
  }
});

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f12f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
