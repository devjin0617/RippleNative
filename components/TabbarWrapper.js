import React, { Component } from 'react';
import {
  TabBarIOS,
  View
} from 'react-native';

type Props = {};
export default class TabbarWrapper extents Component<Props> {
  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="잔액"
          selected="true">
          <View></View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="전송"
          selected="false">
          <View></View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="내역"
          selected="false">
          <View></View>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}