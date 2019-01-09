import React, { Component } from 'react';
import './App.scss';
import Display from './Screen';
import Keyboard from './Keyboard';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: '',
      result: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.getResult = this.getResult.bind(this);
  }

  handleClick(symbol) {
    let formula = this.state.formula;
    const lastChar = formula.charAt(formula.length - 1);
    if (symbol === "AC") {
      formula = "";
    }
    //if dot is not preceded by a number
    else if (symbol === "." && !isNumber(lastChar)) {
      formula += "0.";
    }
    //if the symbol and the last char in formula are both operator
    else if ("+-x/".includes(symbol) && "+-x/".includes(lastChar)) {
      formula = formula.slice(0, formula.length - 1) + symbol;
    }
    // else if (symbol === "0" && lastChar === "0") {
    //   //if multiple zeros, do nothing
    // }
    else if (/\d/.test(symbol)) {
      let numberString = this.getLastNumber(formula, true);
      let newNumberString = numberString + symbol;
      let newNumber = parseFloat(newNumberString);
      formula = formula + " ";//to have a place to replace if the final position is not number
      formula = formula.replace(new RegExp(numberString + " $"), newNumber.toString());
    }
    else if (symbol !== "=") {
      formula += symbol;
    }

    let result = this.getResult(formula, symbol === "=");

    this.setState({
      formula,
      result
    });
  }

  getResult(formula, needCalculation) {
    if (formula === "") return 0;
    if (needCalculation) {
      formula = formula.replace("x", "*");
      if (/[*/]/.test(formula.charAt(0))) {//remove */ from beginning
        formula = formula.slice(1);
      }
      if (/[+\-*/]/.test(formula.charAt(formula.length - 1))) {//remove +-*/ from ending
        formula = formula.slice(0, formula.length - 1);
      }
      return eval(formula);
    }
    else return this.getLastNumber(formula, false);
  }

  getLastNumber(formula, isEndOfFormula) {
    const regex = isEndOfFormula ? /\d+\.?\d*$/g : /\d+\.?\d*/g
    const matchArr = formula.match(regex);
    if (matchArr !== null && matchArr.length > 0) {
      return matchArr[matchArr.length - 1];
    } else {
      return "";
    }

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

function isNumber(char) {
  return /\d/.test(char);
}

export default Calculator;
