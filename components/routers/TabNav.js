import Hot from '../screens/Hot';
import Top from '../screens/Top';
import PlayList from '../screens/PlayList';
import Home from '../screens/Home';
import {
  TabNavigator,
  TabBarBottom
} from 'react-navigation';

const TabNav = TabNavigator({
  Home: {
    screen: Home
  },
  Hot: {
    screen: Hot
  },
  Top: {
    screen: Top
  },
  PlayList: {
    screen: PlayList,
  }
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
  });

export default TabNav;