import React from 'react';
import { connect } from "react-redux";
import { pressButton } from "./Redux";
import './App.scss';
import Display from './Screen';
import Keyboard from './Keyboard';

const Calculator = ({ formula, result, handleClick }) => (
  <div id="background">
    <div id="calculator">
      <Display formula={formula} result={result} />
      <Keyboard handleClick={handleClick} />
    </div>
  </div>
);

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => (
  {
    handleClick: symbol => dispatch(pressButton(symbol))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
