import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize]=useState(window.innerWidth)
  console.log(size)

  const handleResize=()=>{
    setSize(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize', handleResize)

    // clean up when removing the component and before the rerender
    return ()=>{
      window.removeEventListener('resize', handleResize)
    }
  })

  // to add an eventlistenar only on the initial render
  // useEffect(()=>{
  //   window.addEventListener('resize', handleResize)
  // },[])



  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
