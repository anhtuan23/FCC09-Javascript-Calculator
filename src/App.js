import React, { Component } from 'react';
import './App.scss';
import Display from './Screen';
import Keyboard from './Keyboard';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: [" "],
      result: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(symbol) {
    let formula = this.state.formula;
    const lastElement = formula[formula.length - 1];

    if (symbol === "AC") {
      formula = [" "]
    } else if (isOperator(symbol)) {
      if (isOperator(lastElement)) {//do not allow consecutive operators
        formula.pop();
      }
      if (this.state.result !== lastElement){//start a new calculation that operates on the result of the previous evaluation.
        formula = [this.state.result];//side effect: formula starts with operator will have a preceding 0
      }
      formula.push(symbol);
    } else if (symbol === ".") {
      if (isOperator(lastElement) || lastElement === " ") {
        formula.push("0.");
      } else if (isWholeNumber(lastElement)) {
        formula.pop();
        formula.push(lastElement + symbol);
      }
    } else if (isWholeNumber(symbol)) {
      if (isOperator(lastElement) || lastElement === " ") {
        formula.push(symbol);
      } else if (lastElement === "0") {
        formula.pop();
        formula.push(symbol);
      } else {
        formula.pop();
        formula.push(lastElement + symbol);
      }
    } else if (symbol !== "=") {
      formula.push(symbol);
    }

    let result = formula[formula.length - 1];
    if (formula.length === 1 && formula[0] === " ") {
      result = 0;
    } else if (symbol === "=") {
      result = eval(formula.join(""));
    }

    this.setState({
      formula,
      result
    });
  }

  render() {
    return (
      <div id="background">
        <div id="calculator">
          <Display formula={this.state.formula} result={this.state.result} />
          <Keyboard handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

function isNumber(string) {
  return /^\d+\.?\d*$/g.test(string);
}

function isWholeNumber(string) {
  return /^\d+$/g.test(string);
}

function isOperator(char) {
  return "+-*/".includes(char)
}

export default Calculator;
