import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName,setFirstName]=useState('')
  const [email,setEmail]=useState('')
  const [people,setPeople]=useState([])

  const handleSubmit=(e)=>{
    e.preventDefault()
    // check if there is no empty string
    if(firstName && email){
      const person={id: new Date().getTime().toString(),
      firstName, email}
      setPeople((oldPeople)=>{
        return [...oldPeople, person]
      })
      // empty the inputs
      setFirstName('')
      setEmail('')
    }else{
      console.log('empty values');
    }
  }
  return(
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name</label>
          <input
           type="text"
            id="firstName"
             name="firstName"
             value={firstName}
             onChange={(e)=>setFirstName(e.target.value)}
            />
          <label htmlFor="email">Email</label>
          <input
           type="text"
            id="email"
             name="email"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
            />
            </div>
            <button type='submit'>submit</button>
      </form>
      {people.map((person)=>{
        const {id, firstName, email}=person
        return(
          <div key={id} className='item'>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        )
      })}
    </>
  )
};

export default ControlledInputs;
