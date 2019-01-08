import React, { Component } from 'react';
import './App.scss';

class Keyboard extends Component {
  render() {
    return (
      <div id="keyboard">
        <Button text={"AC"} buttonType={"ac-btn"}/>
        <Button text={"="} buttonType={"equal-btn"}/>
        <Button text={"0"} buttonType={"number-btn zero-btn"}/>
        <Button text={"/"} buttonType={"operator-btn"}/>
        <Button text={"x"} buttonType={"operator-btn"}/>
        <Button text={"7"} buttonType={"number-btn"}/>
        <Button text={"8"} buttonType={"number-btn"}/>
        <Button text={"9"} buttonType={"number-btn"}/>
        <Button text={"-"} buttonType={"operator-btn"}/>
        <Button text={"4"} buttonType={"number-btn"}/>
        <Button text={"5"} buttonType={"number-btn"}/>
        <Button text={"6"} buttonType={"number-btn"}/>
        <Button text={"+"} buttonType={"operator-btn"}/>
        <Button text={"1"} buttonType={"number-btn"}/>
        <Button text={"2"} buttonType={"number-btn"}/>
        <Button text={"3"} buttonType={"number-btn"}/>
        <Button text={"."} buttonType={"number-btn"}/>
      </div>
    );
  };
}

class Button extends Component {
  render() {
    return (
      <div className={'btn ' + this.props.buttonType}>
        {this.props.text}
      </div>
    );
  };
}

export default Keyboard;
