import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Keypad = ({onPressButton, operate, operations}) => {
  let rows = [];
  let ops = [];
  let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['.', 0, '='],
    ['(', ')', 'm'],
  ];
  for (let i = 0; i < 5; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(
        <TouchableOpacity
          key={nums[i][j]}
          style={styles.btn}
          onPress={() => onPressButton(nums[i][j])}>
          <Text style={styles.btnText}>{nums[i][j]}</Text>
        </TouchableOpacity>,
      );
    }
    rows.push(
      <View key={i} style={styles.row}>
        {row}
      </View>,
    );
  }

  for (let i = 0; i < 7; i++) {
    ops.push(
      <TouchableOpacity
        key={operations[i]}
        style={styles.btn}
        onPress={() => operate(operations[i])}>
        <Text style={styles.btnText}>{operations[i]}</Text>
      </TouchableOpacity>,
    );
  }

  return (
    <View style={styles.buttons}>
      <View style={styles.numbers}>{rows}</View>
      <View style={styles.operations}>{ops}</View>
    </View>
  );
};

export default Keypad;

const styles = StyleSheet.create({
  buttons: {
    flex: 9,
    flexDirection: 'row',
  },
  numbers: {
    flex: 5,
    padding: 1,
    backgroundColor: '#1e2326',
  },
  operations: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#454e54',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 40,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  white: {
    color: 'white',
  },
});
