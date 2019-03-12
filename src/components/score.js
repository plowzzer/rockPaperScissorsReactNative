import React, { Component } from 'react' 
import { StyleSheet, View, Text } from 'react-native';

export default props => {

  const {playerScore, computerScore} = props

  return(
    <View style={styles.styleField}>
      <View style={styles.score}>
        <Text style={[styles.playerName, styles.player]}>Player</Text>
        <Text style={[styles.playerName, styles.computer]}>Computer</Text>
        <Text style={styles.scoreNumbers}>{playerScore} : {computerScore}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  styleField: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    position: 'relative',
    marginTop: 30,
    marginBottom: 30,
  },
  score: {
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: 'white',
    width:150,
    height:70,
    borderRadius: 4,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerName: {
    backgroundColor: '#8e44ad',
    position: 'absolute',
    top: 19,
    color: 'white',
    padding: 3,
    fontWeight: 'bold',
    borderRadius: 4
  },
  player: {
    borderColor: '#e74c3c',
    color: 'white',
    left: -38
  },
  computer: {
    borderColor: '#bdc3c7',
    color: 'white',
    right: -58
  },
  scoreNumbers: {
    color: 'white',
    fontSize: 36
  }
});