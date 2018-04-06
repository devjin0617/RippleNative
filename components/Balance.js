import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

// import { RippleAPI } from 'ripple-lib';
// import Ripple from 'ripple-lib';
// const Ripple = require('ripple-lib');

export default class Balance extends Component {
  componentDidMount () {
    // const address = 'rMX46MC7EbTCfJZU6Yy61jwYbLnxvku2PM'
    // const vm = this
    // const api = new RippleAPI({ server: 'wss://s1.ripple.com:443' })
    // api.connect().then(() => {
    //   api.getBalances(address).then(balances => {
    //     vm.state = {
    //       amount: balances[0].value
    //     }
    //   }).catch(err => {
    //     if (err.name === 'RippledError') {
          
    //     } else {
    //       alert('지갑정보를 불러오지 못했습니다.')
    //     }
    //   })
    // })
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