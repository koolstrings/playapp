/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {View} from 'react-native';
import TriviaApp from './src/app.js';
export default class App extends Component{
  render() {
    return (
      <View>
          <TriviaApp/>
      </View>
    );
  }
}
