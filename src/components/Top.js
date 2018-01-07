import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Top extends React.Component {
  static navigationOptions = {
    tabBarLabel: '排行榜',
    tabBarIcon: ({ tintColor }) => <Icon name="list" size={26} color={tintColor} />
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue' }} />
    );
  }
}