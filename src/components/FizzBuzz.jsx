import React, { useState, useEffect } from 'react';

export function getFizzBuzz() {
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

export function FizzBuzz (props) {

  const [fizzBuzz, setFizzBuzz] = useState([])

  useEffect(() => {
    setFizzBuzz(getFizzBuzz())
  }, [])

  return (<div>
    {fizzBuzz.map((v, i) => {
      return (
        <p key={i}>{v}</p>
      )})}
  </div>)
}

export default FizzBuzz
