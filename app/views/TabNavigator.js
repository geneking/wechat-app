import React from 'react';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Chat from './Chat/Chat';
import Contact from './Contact/Contact';
import Find from './Find/Find';
import Me from './Me/Me';

const ChatScreen = ({ navigation }) => (<Chat navigation={navigation} />);
const ContactScreen = ({ navigation }) => (<Contact navigation={navigation} />);
const FindScreen = ({ navigation }) => (<Find navigation={navigation} />);
const MeScreen = ({ navigation }) => (<Me navigation={navigation} />);

const tabBarIcon = (tintColor, focused, icon, activeIcon) => (
  <Icon
    name={focused ? icon : activeIcon}
    size={22}
    style={{ color: tintColor }}
  />
)

export default TabNavigator({
  Home: {
    screen: ChatScreen,
    navigationOptions: {
      tabBarLabel: '微信',
      tabBarIcon: ({ tintColor, focused }) => tabBarIcon(tintColor, focused, 'ios-text', 'ios-text-outline')
    }
  },
  Contact: {
    screen: ContactScreen,
    navigationOptions: {
      tabBarLabel: '通讯录',
      tabBarIcon: ({ tintColor, focused }) => tabBarIcon(tintColor, focused, 'ios-contacts', 'ios-contacts-outline'),
    }
  },
  Find: {
    screen: FindScreen,
    navigationOptions: {
      tabBarLabel: '发现',
      tabBarIcon: ({ tintColor, focused }) => tabBarIcon(tintColor, focused, 'ios-compass', 'ios-compass-outline'),
    }
  },
  Me: {
    screen: MeScreen,
    navigationOptions: {
      tabBarLabel: '我',
      tabBarIcon: ({ tintColor, focused }) => tabBarIcon(tintColor, focused, 'ios-person', 'ios-person-outline'),
    }
  }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  tabBarOptions: {
    inactiveTintColor: '#333',
    activeTintColor: '#1fb922',
    style: {
      height: 40,
      backgroundColor: '#fff',
    },
    indicatorStyle: { height: 0 },
    labelStyle: {
      fontSize: 8,
      marginTop: 12,
      paddingBottom: 2,
    }
  }
});
