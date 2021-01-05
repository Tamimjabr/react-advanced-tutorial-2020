import React,{useState} from 'react';

const ErrorExample = () => {
 const [text, setText] = useState('Random Text')
  const handleClick =()=>{
    if(text=== 'Random Text'){
      setText('Hello World')
    }else{
      setText('Random Text')
    }
  }
  return(
    <React.Fragment>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change text
      </button>
    </React.Fragment>
    )
  
};

export default ErrorExample;
