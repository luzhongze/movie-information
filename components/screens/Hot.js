import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  HeaderRight,
  HeaderLeft
} from '../screens/Header';

export default class Hot extends React.Component {
  static navigationOptions = {
    tabBarLabel: '时下流行',
    tabBarIcon: ({ tintColor }) => <Icon name="whatshot" size={26} color={tintColor} />
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue' }} />
    );
  }
}