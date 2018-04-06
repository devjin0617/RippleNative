import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class Balance extends Component {
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