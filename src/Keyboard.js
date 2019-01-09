import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';

const buttonArr = [
  { text: "AC", buttonType: "ac-btn", id: "clear" },
  { text: "=", buttonType: "equal-btn", id: "equals" },
  { text: "0", buttonType: "number-btn zero-btn", id: "zero" },
  { text: "/", buttonType: "operator-btn", id: "divide" },
  { text: "x", buttonType: "operator-btn", id: "multiply" },
  { text: "7", buttonType: "number-btn", id: "seven" },
  { text: "8", buttonType: "number-btn", id: "eight" },
  { text: "9", buttonType: "number-btn", id: "nine" },
  { text: "-", buttonType: "operator-btn", id: "subtract" },
  { text: "4", buttonType: "number-btn", id: "four" },
  { text: "5", buttonType: "number-btn", id: "five" },
  { text: "6", buttonType: "number-btn", id: "six" },
  { text: "+", buttonType: "operator-btn", id: "add" },
  { text: "1", buttonType: "number-btn", id: "one" },
  { text: "2", buttonType: "number-btn", id: "two" },
  { text: "3", buttonType: "number-btn", id: "three" },
  { text: ".", buttonType: "number-btn", id: "decimal" },
];

const Keyboard = ({ handleClick }) => (
  <div id="keyboard">
    {buttonArr.map(e =>
      <Button text={e.text} buttonType={e.buttonType} id={e.id} key={e.id} handleClick={handleClick} />
    )}
  </div>
)

Keyboard.proptypes = { handleClick: PropTypes.func.isRequired }

const Button = ({ text, buttonType, id, handleClick }) => {
  const returnSymbol = text === "x" ? "*" : text;
  return (
    <div className={'btn ' + buttonType} id={id} onClick={() => handleClick(returnSymbol)}>
      {text}
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Keyboard;
