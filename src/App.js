import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Receipt extends Component {
  constructor(props) {
    super(props);
    this.state = {total: 0};
  }
  render() {
    return (
      <div>
        <h2>Total Spent</h2>
        <h3>$ {this.state.total}</h3>
        <div>
          <button onClick={() => this.setState({total: this.state.total+1})} >+</button>

          <input type="checkbox" id="food" name="food" ></input>
          <label for="food">Food</label>

          <input type="checkbox" id="bills" name="bills" ></input>
          <label for="bills">Bills</label>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Receipt/>
      </div>
    );
  }
}

export default App;
