import React, { Component } from 'react';
import { RkButton } from 'react-native-ui-kitten';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';


export default class StartPage extends Component {
  createWallet () {
    alert('createWallet')
  }
  openWallet () {
    alert('openWallet')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          RippleNative (Ripple Wallet)
        </Text>
        <RkButton onPress={this.createWallet} style={styles.button}>Create Wallet</RkButton>
        <RkButton onPress={this.openWallet} style={styles.button}>Get the Wallet</RkButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#324057',
  },
  text: {
    fontSize: 20,
    color: 'white'
  },
  button: {
    width: '90%',
    marginTop: 10
  }
})