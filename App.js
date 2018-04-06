/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux'
import StartPage from './components/StartPage'
import MainPage from './components/TabbarWrapper'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" headerMode="none">
          <Scene key="StartPage" component={StartPage} initial={true}></Scene>
          <Scene key="MainPage" component={MainPage}></Scene>
        </Scene>
      </Router>
    );
  }
}
