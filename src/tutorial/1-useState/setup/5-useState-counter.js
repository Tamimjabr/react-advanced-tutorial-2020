import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue]=useState(0)

  const complexIncrease=()=>{
    setTimeout(()=>{
      setValue(prevState=>{
        return prevState +1
      })
    },2000)
  }

  return(<>
    <section style={{ margin: '4rem 0' }}>
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={()=> setValue(value-1)}>Decrease</button>
      <button className='btn' onClick={()=> setValue(0)}>reset</button>
      <button className='btn' onClick={()=> setValue(value+1)}>Increase</button>
    </section>
        <section style={{ margin: '4rem 0' }}>
        <h2>More complex Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>Increase Later</button>
      </section>
      </>
  )
};

export default UseStateCounter;
