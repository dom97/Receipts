import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Receipt extends Component {
  constructor(props) {
    super(props);
    this.state = {total: 0, foodTotal: 0, billTotal: 0, clothesTotal: 0, miscTotal: 0,
    categories:
    {
      food: false,
      bills: false,
      clothes: false,
      misc: false
    }
  };
  }
  //consider making the checkboxes into selectable buttons
  handleAdd () {
    let newState = this.state;
    newState.total++;
    if (this.state.categories.food) {
      newState.foodTotal++;
    }
    if (this.state.categories.bills) {
      newState.billTotal++;
    }
    if (this.state.categories.clothes) {
      newState.clothesTotal++;
    }
    if (this.state.categories.misc) {
      newState.miscTotal++;
    }
    this.setState({newState});
  }
  handleCategory (category) {
    let newCategories = this.state.categories;
    newCategories[category] = !newCategories[category];
    this.setState({categories: newCategories});

  }
  render() {
    return (
      <div>
        <h2>Total Spent</h2>
        <h3>$ {this.state.total}</h3>
        <div>
          <button onClick={() => this.handleAdd()} >+</button>
          <div>
            
            <label>
              <input type="checkbox" id="food" name="food"
               onClick={() => this.handleCategory("food")}></input>
              Food
            </label>

            <label>
              <input type="checkbox" id="bills" name="bills"
              onClick={() => this.handleCategory("bills")}></input>
              Bills
            </label>

            <label>
              <input type="checkbox" id="clothes" name="clothes" 
              onClick={() => this.handleCategory("clothes")}></input>
              Clothes
            </label>

            <label>
              <input type="checkbox" id="misc" name="misc" value="misc" 
              onClick={() => this.handleCategory("misc")}></input>
              Miscellaneous
            </label>

          </div>
        </div>
        <h3>Spent on Food: {this.state.foodTotal} {parseInt(this.state.foodTotal * 100  / this.state.total)}%</h3>
        <h3>Spent on Bills: {this.state.billTotal} {parseInt(this.state.billTotal * 100  / this.state.total)}%</h3>
        <h3>Spent on Clothes: {this.state.clothesTotal} {parseInt(this.state.clothesTotal * 100  / this.state.total)}%</h3>
        <h3>Spent on Miscellaneous: {this.state.miscTotal} {parseInt(this.state.miscTotal * 100  / this.state.total)}%</h3>
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
