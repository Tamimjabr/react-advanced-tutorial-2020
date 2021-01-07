import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return (
    <>
    <button className='btn' onClick={()=>setShow(!show)}> hide/show</button>
    {show && <Item></Item>}
    </>
  )
};


const Item=()=>{
  const [size, setSize]=useState(window.innerWidth)
 
  const handleResize=()=>{
    setSize(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener('resize', handleResize)
    //todo when hiding and showing a component we have to have a clean up function to renove eventlistener
    return ()=>{
      window.removeEventListener('resize',handleResize)
    }
  },[])

  return(
    <>
        <div style={{ marginTop: '2rem' }}>
      <h1>Window</h1>
      <h2>size : {size}</h2>
    </div>
    </>
  )
}
export default ShowHide;
