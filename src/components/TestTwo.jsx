import React, { useState } from 'react';

export function getOddNumbers() {
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

export function TestTwo (props) {

  const [renderItems, setRenderItems] = useState([])

  const onClickA = () => {setRenderItems(getOddNumbers())}
  const onClickB = () => {setRenderItems([])}
  const hasNumbers = () => {return renderItems.length > 0}

  return (
    <div>
      { hasNumbers() ? (
        <button className="button buttonB" onClick={onClickB}>Reset</button>
      ) : (<button className="button buttonA" onClick={onClickA}>Button A</button>)}
      {renderItems.map((item) => {
        return (<p key={item.val} className={item.isMultiple5 ? 'highlight' : ''}>
        {item.val}
        </p>)
      })}
    </div>
  )

}

export default TestTwo
