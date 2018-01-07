import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class PlayList extends React.Component {
  static navigationOptions = {
    tabBarLabel: '播放列表',
    tabBarIcon: ({ tintColor }) => <Icon name="playlist-play" size={26} color={tintColor} />
  }
  render() {
    return (
      <View style={{ backgroundColor: 'gray' }} />
    );
  }
}