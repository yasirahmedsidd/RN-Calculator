import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Result = ({result}) => {
  return (
    <View style={styles.result}>
      <Text style={styles.resultText}>{result}</Text>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  result: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultText: {
    fontSize: 35,
    paddingRight: 10,
    color: 'black',
  },
});
