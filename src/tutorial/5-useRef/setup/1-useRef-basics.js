import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const [test, setTest]=React.useState('')
  const refContainer= useRef('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(refContainer.current)
    console.log(refContainer.current.value)
    setTest(refContainer.current.value)
  }
  useEffect(()=>{
    console.log(refContainer.current)
    // focus the input on the inital render
    refContainer.current.focus()
  })


  return(
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
        </div>
        <button type='submit'>submit</button>
      </form>
      <div>{test || "Default string"}</div>
    </>
    
  );
};

export default UseRefBasics;
