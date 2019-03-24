import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import Choice from './choice'

export default class Choices extends Component {

  // onSelectChoice = (selectedChoice) => {
  //   console.log(selectedChoice)
  //   console.log(this.props)
  //   this.setState({resultText: 'teste'})
  // }

  onClick = () => {
    console.log(this.props.handler)
  }

  render(){
    return(
      <View style={styles.choices}>
        {/* <Choice type="rock" onSelectChoice={() => this.onSelectChoice('r')}/> */}
        <Choice type="rock" onClick={this.props.handler}/>
        <Choice type="paper" onSelectChoice={() => this.onSelectChoice('p')}/>
        <Choice type="scissors" onSelectChoice={() => this.onSelectChoice('s')}/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  choices: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});