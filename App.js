import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Calculation from './src/components/Calculation';
import Keypad from './src/components/Keypad';
import Result from './src/components/Result';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      result: '',
      calculationValue: '',
    };
    this.operations = ['AC', 'DEL', '+', '-', '*', '/', '%'];
  }

  calculationResult() {
    const text = this.state.result;
    this.setState({
      calculationValue: eval(text),
    });
  }

  validate() {
    const text = this.state.result;
    switch (text.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        return false;
    }
    return true;
  }

  onPressButton = text => {
    console.log(text);

    if (text == '=') {
      return this.validate() && this.calculationResult(this.state.result);
    }
    this.setState({
      result: this.state.result + text,
    });
  };

  operate = operation => {
    switch (operation) {
      case 'AC':
        this.setState({
          result: '',
          calculationValue: '',
        });
        break;

      case 'DEL':
        console.log(this.state.result);
        let text = this.state.result.split('');
        text.pop();
        this.setState({
          result: text.join(''),
        });
        break;

      case '+':
      case '-':
      case '*':
      case '/':
      case '%':
        const lastChar = this.state.result.split('').pop();

        if (this.operations.indexOf(lastChar) > 0) return;

        if (this.state.text == '') return;
        this.setState({
          result: this.state.result + operation,
        });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Result result={this.state.result} />
        <Calculation calculation={this.state.calculationValue} />
        <Keypad
          onPressButton={this.onPressButton}
          operate={this.operate}
          operations={this.operations}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
