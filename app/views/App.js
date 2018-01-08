import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Platform,
  StatusBar,
  Text,
  View
} from 'react-native';

import TabNavigator from './TabNavigator';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
          <StatusBar
            backgroundColor={'#00bafe'}
            barStyle="light-content"
            translucent={true}
          />
          <TabNavigator />
      </View>
    );
  }
}
