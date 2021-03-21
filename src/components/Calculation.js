import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Calculation = ({calculation}) => {
  return (
    <View style={styles.calculation}>
      <Text style={styles.calculationText}>{calculation}</Text>
    </View>
  );
};

export default Calculation;

const styles = StyleSheet.create({
  calculation: {
    flex: 1,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  calculationText: {
    fontSize: 50,
    paddingRight: 10,
    color: 'black',
  },
});
