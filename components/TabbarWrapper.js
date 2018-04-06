import React, { Component } from 'react';
import StartPage from './StartPage'
import {
  TabBarIOS,
  View
} from 'react-native';

type Props = {};
export default class TabbarWrapper extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'balance'
    };
  }
  componentDidMount () {
    this.setState({
      selectedTab: 'history'
    });
  }
  changeTab () {
    this.setState({
      selectedTab: 'history'
    });
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
          <StartPage></StartPage>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'send'}
          title="전송"
          onPress={() => {
            this.setState({
              selectedTab: 'send'
            })
          }}>
          <View></View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'history'}
          title="내역"
          onPress={() => {
            this.setState({
              selectedTab: 'history'
            })
          }}>
          <View></View>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}