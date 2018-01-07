import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Home extends React.Component {
  static navigationOptions = ({ navigation, screenProps, navigationOptions }) => ({
    tabBarLabel: '主页',
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={26} color={tintColor} />
  })
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }} >
        
      </View>
    );
  }
}
