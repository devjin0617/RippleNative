import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

type Props = {};
export default class StartPage extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>
        Hello RippleNative!
        </Text>
      </View>
    );
  }
}
