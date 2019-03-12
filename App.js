/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Choices from './src/components/choices'
import Score from './src/components/score'
import ScoreText from './src/components/resultText'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Rock Paper Scissors</Text>
        <Score playerScore='0' computerScore='0'/>
        <ScoreText />
        <Choices />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#ecf0f1',
    fontWeight: 'bold'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
