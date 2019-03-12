import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import Choice from './choice'

export default props => {
  return(
    <View style={styles.choices}>
      <Choice type="rock" />
      <Choice type="paper" />
      <Choice type="scissors" />
    </View>
  )
}

const styles = StyleSheet.create({
  choices: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});