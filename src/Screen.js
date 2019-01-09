import React, { Component } from 'react';
import './App.scss';

class Screen extends Component {
  render() {
    return (
      <div id="screen">
        <Formula formula={this.props.formula}/>
        <Result result={this.props.result}/>
      </div>
    );
  }
}

class Formula extends Component {
  render() {
    return (
      <div id="formula">
        {this.props.formula}
      </div>
    );
  }
}

class Result extends Component {
  render() {
    return (
      <div id="display">
        {this.props.result}
      </div>
    );
  }
}

export default Screen;