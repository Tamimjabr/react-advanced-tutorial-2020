import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';

const Person = () => {
  console.log(useParams())
  const {id} = useParams()
  console.log(id)
  const [name, setName]=useState('default name')

  useEffect(()=>{
    const newPerson= data.find(person => person.id=== parseInt(id))
    console.log(newPerson)
    setName(newPerson.name)

  },[])

  return (
    <div>
      <h2>{name}</h2>
      <Link to='/people' className='btn'> Back to people</Link>
    </div>
  );
};

export default Person;
