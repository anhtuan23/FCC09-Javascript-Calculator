import React, { Component } from 'react';
import './App.scss';

class Display extends Component {
  render() {
    return (
      <div id="display">
        <Formula />
        <Result />
      </div>
    );
  }
}

class Formula extends Component {
  render() {
    return (
      <div id="formula">
      </div>
    );
  }
}

class Result extends Component {
  render() {
    return (
      <div id="result">
      </div>
    );
  }
}

export default Display;