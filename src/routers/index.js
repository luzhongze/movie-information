import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import AccountSetting from '../components/AccountSetting';
import StackNav from './StackNav';

const DrawerNav = DrawerNavigator({
  Home: {
    path: '/',
    screen: StackNav
  }
}, {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent: props => <AccountSetting {...props} />
  })

export default DrawerNav;