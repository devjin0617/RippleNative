import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import QRCode from 'react-native-qrcode';

export default class Balance extends Component {
  state = {
    address: 'rMX46MC7EbTCfJZU6Yy61jwYbLnxvku2PM'
  }
  render() {
    return (
      <View style={styles.container}>
        <QRCode
          value={this.state.address}
          size={200}
          bgColor='black'
          fgColor='white'/>
        <Text style={styles.text}>
          {this.state.address}
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
  },
  text: {
    marginTop: 10
  }
})