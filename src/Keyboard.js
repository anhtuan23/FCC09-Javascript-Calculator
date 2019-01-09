import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';

const Keyboard = ({ handleClick }) => (
  <div id="keyboard">
    <Button text={"AC"} buttonType={"ac-btn"} id={"clear"} handleClick={handleClick} />
    <Button text={"="} buttonType={"equal-btn"} id={"equals"} handleClick={handleClick} />
    <Button text={"0"} buttonType={"number-btn zero-btn"} id={"zero"} handleClick={handleClick} />
    <Button text={"/"} buttonType={"operator-btn"} id={"divide"} handleClick={handleClick} />
    <Button text={"x"} buttonType={"operator-btn"} id={"multiply"} handleClick={handleClick} />
    <Button text={"7"} buttonType={"number-btn"} id={"seven"} handleClick={handleClick} />
    <Button text={"8"} buttonType={"number-btn"} id={"eight"} handleClick={handleClick} />
    <Button text={"9"} buttonType={"number-btn"} id={"nine"} handleClick={handleClick} />
    <Button text={"-"} buttonType={"operator-btn"} id={"subtract"} handleClick={handleClick} />
    <Button text={"4"} buttonType={"number-btn"} id={"four"} handleClick={handleClick} />
    <Button text={"5"} buttonType={"number-btn"} id={"five"} handleClick={handleClick} />
    <Button text={"6"} buttonType={"number-btn"} id={"six"} handleClick={handleClick} />
    <Button text={"+"} buttonType={"operator-btn"} id={"add"} handleClick={handleClick} />
    <Button text={"1"} buttonType={"number-btn"} id={"one"} handleClick={handleClick} />
    <Button text={"2"} buttonType={"number-btn"} id={"two"} handleClick={handleClick} />
    <Button text={"3"} buttonType={"number-btn"} id={"three"} handleClick={handleClick} />
    <Button text={"."} buttonType={"number-btn"} id={"decimal"} handleClick={handleClick} />
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
