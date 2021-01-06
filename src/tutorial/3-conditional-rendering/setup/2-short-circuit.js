import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator


// how   const secondValue = text && 'hello world'; works
// if the first is true will return the second value
// if the first is false will return the first value

const ShortCircuit = () => {
  const [text, setText]= useState('Tamim')
  const [isError, setIsError]=useState(false)
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  // if doesn't work in jsx
  return(
    <>
    <h1>short circuit</h1>
    <h2>First Value : {firstValue}</h2>
    <h2>Second Value : {secondValue}</h2>
    <h3>{text || "It's a default value if there is no text"}</h3>
    {text && <p>The text is true so return this p element</p>}
    {!text && <p>the first argument is false so  this will not show up</p>}

    <button className='btn' onClick={()=>setIsError(!isError)}>toggle error</button>
    {isError && <h1>Error...</h1>}
    {isError ? <h3>Error is true</h3> : <h3>Error is false</h3>}
    </>
  ) 
};

export default ShortCircuit;
