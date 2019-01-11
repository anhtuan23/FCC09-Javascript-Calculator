import { createStore } from "redux";

const BUTTON_PRESSED = 'BUTTON_PRESSED';

export const pressButton = (buttonText) => ({ type: BUTTON_PRESSED, buttonText });

const initialState = {
  formula: [" "],
  result: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case BUTTON_PRESSED:
      return onButtonClick(state, action.buttonText);
    default:
      return state;
  }
}

export const getStore = () => createStore(reducer);

function onButtonClick(state, symbol) {
  let formula = state.formula;
  const lastElement = formula[formula.length - 1];

  if (symbol === "AC") {
    formula = [" "]
  } else if (isOperator(symbol)) {
    if (isOperator(lastElement)) {//do not allow consecutive operators
      formula.pop();
    }
    if (state.result !== lastElement) {//start a new calculation that operates on the result of the previous evaluation.
      formula = [state.result];//side effect: formula starts with operator will have a preceding 0
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

  return { formula, result };
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