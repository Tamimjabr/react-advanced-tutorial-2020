import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue]=useState(0)
  // you can't useEffect inside an if sats, but you can if inside useEffect
  useEffect(()=>{
    if(value>1){
      document.title=`React ${value}`
    }

    console.log('using effect')
  },[value])


  return<>
  <h1>{value}</h1>
  <button className="btn" onClick={()=>setValue(value+1)}>increase</button>
  </>
};

export default UseEffectBasics;
