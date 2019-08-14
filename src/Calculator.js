import React from 'react';
import './App.css';


class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      screen: ''
    };
  };

  render() {
    var { screen } = this.state;

    return (
      <div>
        <h1 id="title">React Calculator ;)))</h1>
        <div className="Calculator-Box">
          <div className="View-Box">
            {this.state.screen}
          </div>
          <div className="Number-Buttons">
            <button>1</button>
            <button onClick={this.AddScreen.bind(this)}>2</button>
            <button>3</button>
   
            <button>4</button>
            <button>5</button>
            <button>6</button>
     
            <button>7</button>
            <button>8</button>
            <button>9</button>
     
            <button>0</button>
            <button>+</button>
            <button>-</button>
      
            <button>X</button>
            <button>=</button>
            <button>AC</button>
          </div>
        </div>
      </div>
    );
  };

  AddScreen() {
    this.setState({screen: this.state.screen + 2})
  }




}




export default Calculator;