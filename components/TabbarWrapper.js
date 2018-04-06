import React, { Component } from 'react';
import StartPage from './StartPage'
import {
  TabBarIOS,
  View
} from 'react-native';

type Props = {};
export default class TabbarWrapper extends Component<Props> {
  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="잔액"
          selected="true">

          <StartPage></StartPage>

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