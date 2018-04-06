import React, { Component } from 'react';
import Balance from './Balance'
import Send from './Send'
import History from './History'
import {
  TabBarIOS,
  View
} from 'react-native';

export default class TabbarWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'balance'
    };
  }
  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'balance'}
          title="잔액"
          onPress={() => {
            this.setState({
              selectedTab: 'balance'
            })
          }}>
          <Balance></Balance>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'send'}
          title="전송"
          onPress={() => {
            this.setState({
              selectedTab: 'send'
            })
          }}>
          <Send></Send>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'history'}
          title="내역"
          onPress={() => {
            this.setState({
              selectedTab: 'history'
            })
          }}>
          <History></History>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}