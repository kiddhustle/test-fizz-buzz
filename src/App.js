import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component  {

  constructor (props) {
    super(props)
     this.state = {
       renderItems: [],
       fizzBuzz: []
     }

     this.getOddNumbers = this.getOddNumbers.bind(this)
     this.onClickA = this.onClickA.bind(this)
     this.onClickB = this.onClickB.bind(this)
     this.hasNumbers = this.hasNumbers.bind(this)
     this.getFizzBuzz = this.getFizzBuzz.bind(this)
  }
  getOddNumbers() {
    let numbers = []
    for (let x = 1; x <= 100; x++) {
      // if even skip
      if (x % 2 === 0) {
        continue
      } else {
        numbers.push({
          val: x,
          isMultiple5: x % 5 === 0 ? true : false
        })
      }

    }

    return numbers
  }

  onClickA () {
    const renderItems = this.getOddNumbers()
    this.setState({renderItems})
  }

  onClickB () {
    const renderItems = []
    this.setState({renderItems})
  }

  hasNumbers () {
    const {renderItems} = this.state
    return renderItems.length > 0
  }

  getFizzBuzz() {
    const out = []
    for(let x = 1; x <= 100; x++) {
      let val = x
      if (x % 3 === 0 && x % 5 === 0) {
        val = 'FizzBuzz'
      } else if (x % 3 === 0) {
        val = 'Fizz'
      } else if (x % 5 === 0) {
        val = 'Buzz'
      }

      out.push(val)
    }
    return out
  }

  componentDidMount () {
    const fizzBuzz = this.getFizzBuzz()
    this.setState({fizzBuzz})
  }

  render (){

    const {renderItems, fizzBuzz} = this.state
    console.log(renderItems)
    return (

      <div className="App">
        <h1>Healthcare interview tests</h1>
        <h2>Test 1</h2>
        <h3>Requirements</h3>
        <p>Write a program (in 20-30mins) that does the following:</p>
        <ol className="list">
          <li>Renders Button A (green in colour)</li>
          <li>On clicking Button A prints odd numbers up to 100</li>
          <li>Prints numbers that are multiples of 5 in blue text</li>
          <li>After clicking Button A and printing the numbers a red reset button should be rendered instead</li>
          <li>Clicking the Reset button should clear the printed number and re-render Button A</li>
        </ol>
        <h3>Solution</h3>
        <div>
          { this.hasNumbers() ? (
            <button className="button buttonB" onClick={this.onClickB}>Reset</button>
          ) : (<button className="button buttonA" onClick={this.onClickA}>Button A</button>)}
          {renderItems.map((item) => {
            return (<p key={item.val} className={item.isMultiple5 ? 'highlight' : ''}>
            {item.val}
            </p>)
          })}
        </div>


        <h2>Test 2: Fizz Buzz</h2>
        <h3>Requirements</h3>
        <p>Write a short program that prints each number from 1 to 100 on a new line.<br />
          For each multiple of 3, print <q>Fizz</q> instead of the number.<br />
          For each multiple of 5, print <q>Buzz</q> instead of the number.<br />
          For numbers which are multiples of both 3 and 5, print <q>FizzBuzz</q> instead of the number.</p>
        <h3>Solution</h3>
        <div>
          {fizzBuzz.map((v) => {
            return (
              <p>{v}</p>
            )})}
        </div>
      </div>




    );
  }

}

export default App;
