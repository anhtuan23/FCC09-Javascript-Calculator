import React from 'react';
import PropTypes from 'prop-types'
import './App.scss';

const Screen = ({ formula, result }) => (
  < div id="screen" >
    <Formula formula={formula} />
    <Result result={result} />
  </div >
)

Screen.propTypes = {
  formula: PropTypes.array.isRequired,
  result: PropTypes.string.isRequired
}

const Formula = ({ formula }) => (
  <div id="formula">
    {formula}
  </div>
)

Formula.propTypes = { formula: PropTypes.array.isRequired }

const Result = ({ result }) => (
  <div id="display">
    {result}
  </div>
)

Result.propTypes = { result: PropTypes.string.isRequired }

export default Screen;