import Hot from '../components/Hot';
import Top from '../components/Top';
import PlayList from '../components/PlayList';
import Home from '../components/Home';
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