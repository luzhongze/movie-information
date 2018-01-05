import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import Logo from '../../images/logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const HeaderLeft = props => (
  <View style={styles.leftItems}>
    <Image resizeMode='contain' source={Logo} style={styles.logo} />
    <Text style={styles.logoLabel}>影讯</Text>
  </View>
);

export const HeaderRight = props => (
  <View style={styles.rightItems}>
    <TouchableOpacity onPress={props.searchOnPress}>
      <Icon style={styles.navItem} size={26} name='search' />
    </TouchableOpacity>
    <TouchableOpacity onPress={props.accountOnPress}>
      <Icon style={styles.navItem} size={26} name='account-circle' />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 20
  },
  logoLabel: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  leftItems: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  rightItems: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navItem: {
    paddingRight: 15,
  }
})