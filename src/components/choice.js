import React, { Component } from 'react' 
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';

export default props => {

  const {win, lose, drow} = props
  
  let imageUri = ''
  switch (props.type) {
    case 'rock':
      imageUri = require('../images/rock.png')
      break;
    
    case 'paper':
      imageUri = require('../images/paper.png')
      break;
      
    case 'scissors':
      imageUri = require('../images/scissors.png')
      break;
  }

  const styleField = [styles.buttonStyle]
    if (win) styleField.push(styles.winStyle)
    if (lose) styleField.push(styles.lostStyle)
    if (drow) styleField.push(styles.drowStyle)

  return(
    <TouchableWithoutFeedback onPress={props.select}>
      <View style={styleField}>
        <Image style={styles.image} source={imageUri}/>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 50,
    width:80,
    height:80,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5
  },
  winStyle: {
    borderColor: '#2ecc71',
  },
  lostStyle: {
    borderColor: '#e74c3c'
  },
  drowStyle: {
    borderColor: '#bdc3c7'
  },
  image: {
    width: 50,
    height: 50
  }
});