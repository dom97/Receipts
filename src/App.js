import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Receipt extends Component {
  constructor(props) {
    super(props);
    this.state = {total: 0};
  }
  //consider making the checkboxes into selectable buttons
  render() {
    return (
      <div>
        <h2>Total Spent</h2>
        <h3>$ {this.state.total}</h3>
        <div>
          <button onClick={() => this.setState({total: this.state.total+1})} >+</button>
          <div>
            
            <label>
              <input type="checkbox" id="food" name="food" ></input>
              Food
            </label>

            <label>
              <input type="checkbox" id="bills" name="bills" ></input>
              Bills
            </label>

            <label>
              <input type="checkbox" id="clothes" name="clothes" ></input>
              Clothes
            </label>

            <label>
              <input type="checkbox" id="misc" name="misc" value="misc" ></input>
              Miscellaneous
            </label>

          </div>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">

        <Receipt/>
      </div>
    );
  }
}

export default App;
