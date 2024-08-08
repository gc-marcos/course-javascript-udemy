import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import Flag from './Flag';

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <TouchableWithoutFeedback
          style={styles.flagButton}
          onPress={props.onFlagPress}>
          <Flag bigger />
        </TouchableWithoutFeedback>
        <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
        <TouchableWithoutFeedback
          style={styles.button}
          onPress={props.onNewGame}>
          <Text style={styles.buttonLabel}>Novo Jogo</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EEE',
    // alignItems: 'center',
    alignContent: 'space-around',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  flagContainer: {
    flexDirection: 'row',
  },
  flagButton: {
    marginTop: 10,
    minWidth: 30,
  },
  flagsLeft: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 5,
    marginLeft: 20,
  },
  button: {
    backgroundColor: '#999',
    padding: 5,
    // marginLeft: 10,
    // borderRadius: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  buttonLabel: {
    fontSize: 20,
    color: '#DDD',
    fontWeight: 'bold',
  },
});
