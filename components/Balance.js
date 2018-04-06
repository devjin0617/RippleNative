import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import Ripple from '../lib/ripple'

export default class Balance extends Component {
  async componentDidMount () {
    const address = 'rMX46MC7EbTCfJZU6Yy61jwYbLnxvku2PM'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Balance View!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  }
})