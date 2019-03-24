/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Choice from './src/components/choice'
import Score from './src/components/score'
import ScoreText from './src/components/resultText'

import { checkWinner } from './src/functions'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = this.newGame()
  }

  onSelectChoice = (selectedChoice) => {
    const winnerText = checkWinner(selectedChoice)
    console.log(winnerText)
    this.setState({resultText: winnerText})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Rock Paper Scissors</Text>
        <Score playerScore={this.state.playerScore} computerScore='0'/>
        <ScoreText resultText={this.state.resultText} />
        <View style={styles.choices}>
          <Choice type="rock" onSelectChoice={() => this.onSelectChoice('r')}/>
          <Choice type="paper" onSelectChoice={() => this.onSelectChoice('p')}/>
          <Choice type="scissors" onSelectChoice={() => this.onSelectChoice('s')}/>
        </View>
      </View>
    );
  }

  newGame = () => {
    return {
      playerScore: 0,
      computerScore: 0,
      resultText: '',
      won: false,
      lost: false,
      drow: false
    }
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
  choices: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
