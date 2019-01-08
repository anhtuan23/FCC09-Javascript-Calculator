import React, { Component } from 'react';
import './App.scss';
import Display from './Display';
import Keyboard from './Keyboard';

class Calculator extends Component {
  render() {
    return (
      <div id="background">
        <div id="calculator">
          <Display />
          <Keyboard />
        </div>
      </div>
    );
  }
}

export default Calculator;
