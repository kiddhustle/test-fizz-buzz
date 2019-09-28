import React from 'react';
// import logo from './logo.svg';
import './App.css';
import FizzBuzz from './components/FizzBuzz'
import TestTwo from './components/TestTwo'

function App (props)  {
  return (

    <div className="App">
      <h1 id="top">Healthcare interview tests</h1>
      <p>The following coding challenges were carried out as part of a technical test for a UK healthcare provider:</p>
      <ol>
        <li><a href="#test_1">Test 1: FizzBuzz</a></li>
        <li><a href="#test_2">Test 2</a></li>
      </ol>
      <h2 id="test_1">Test 1: Fizz Buzz</h2>
      <h3>Requirements</h3>
      <p>Write a short program that prints each number from 1 to 100 on a new line.<br />
        For each multiple of 3, print <q>Fizz</q> instead of the number.<br />
        For each multiple of 5, print <q>Buzz</q> instead of the number.<br />
        For numbers which are multiples of both 3 and 5, print <q>FizzBuzz</q> instead of the number.</p>
      <h3>Solution</h3>
      <FizzBuzz />
      <a className="backtotop" href="#top">Back to top</a>

      <h2 id="test_2">Test 2</h2>
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
      <TestTwo />
      <a className="backtotop" href="#top">Back to top</a>
    </div>
  );
}

export default App;
