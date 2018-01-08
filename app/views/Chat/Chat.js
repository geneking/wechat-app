import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Chat extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>这是微信首页</Text>
      </View>
    );
  }
}
