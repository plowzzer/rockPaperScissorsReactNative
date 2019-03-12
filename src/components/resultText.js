import React, { Component } from 'react' 
import { StyleSheet, View, Text } from 'react-native';

export default props => {
  return(
    <View style={styles.styleField}>
      <Text style={styles.scoreText}>Papel ganhou de pedra</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  styleField: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
    marginBottom:20,
  },
  scoreText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22
  }
});