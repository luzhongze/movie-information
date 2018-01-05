import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {
  HeaderRight,
  HeaderLeft
} from '../screens/Header';
import TabNav from './TabNav';

const StackNav = StackNavigator({
  Home: {
    screen: TabNav,

  }
}, {
    navigationOptions: {
      headerStyle: { marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, },
      headerLeft: <HeaderLeft />,
      headerRight: <HeaderRight accountOnPress={() => { }} />,
    },
    headerMode: 'float'
  }
);

export default StackNav;