import React, { Component } from 'react';
import './App.scss';

class Keyboard extends Component {
  render() {
    return (
      <div id="keyboard">
        <Button text={"AC"} buttonType={"ac-btn"} id={"clear"} handleClick={this.props.handleClick} />
        <Button text={"="} buttonType={"equal-btn"} id={"equals"} handleClick={this.props.handleClick} />
        <Button text={"0"} buttonType={"number-btn zero-btn"} id={"zero"} handleClick={this.props.handleClick} />
        <Button text={"/"} buttonType={"operator-btn"} id={"divide"} handleClick={this.props.handleClick} />
        <Button text={"x"} buttonType={"operator-btn"} id={"multiply"} handleClick={this.props.handleClick} />
        <Button text={"7"} buttonType={"number-btn"} id={"seven"} handleClick={this.props.handleClick} />
        <Button text={"8"} buttonType={"number-btn"} id={"eight"} handleClick={this.props.handleClick} />
        <Button text={"9"} buttonType={"number-btn"} id={"nine"} handleClick={this.props.handleClick} />
        <Button text={"-"} buttonType={"operator-btn"} id={"subtract"} handleClick={this.props.handleClick} />
        <Button text={"4"} buttonType={"number-btn"} id={"four"} handleClick={this.props.handleClick} />
        <Button text={"5"} buttonType={"number-btn"} id={"five"} handleClick={this.props.handleClick} />
        <Button text={"6"} buttonType={"number-btn"} id={"six"} handleClick={this.props.handleClick} />
        <Button text={"+"} buttonType={"operator-btn"} id={"add"} handleClick={this.props.handleClick} />
        <Button text={"1"} buttonType={"number-btn"} id={"one"} handleClick={this.props.handleClick} />
        <Button text={"2"} buttonType={"number-btn"} id={"two"} handleClick={this.props.handleClick} />
        <Button text={"3"} buttonType={"number-btn"} id={"three"} handleClick={this.props.handleClick} />
        <Button text={"."} buttonType={"number-btn"} id={"decimal"} handleClick={this.props.handleClick} />
      </div>
    );
  };
}

class Button extends Component {

  render() {
    const returnSymbol = this.props.text === "x" ? "*" : this.props.text;
    return (
      <div className={'btn ' + this.props.buttonType} id={this.props.id} onClick={() => this.props.handleClick(returnSymbol)}>
        {this.props.text}
      </div>
    );
  };
}

export default Keyboard;
