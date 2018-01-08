import { StackNavigator } from 'react-navigation';

import Chat from './Chat/Chat';
import NoteBook from './NoteBook/NoteBook';
import Find from './Find/Find';
import Me from './Me/Me';

export default StackNavigator({
  Home: {
    screen: Chat,
    navigationOptions: {
      tabBarLabel: '微信'
    }
  },
  NoteBook: {
    screen: NoteBook,
    navigationOptions: {
      tabBarLabel: '通讯录'
    }
  },
  Find: {
    screen: Find,
    navigationOptions: {
      tabBarLabel: '发现'
    }
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: '我'
    }
  }
});
