import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople]= React.useState(data)

  const removePerson=(id)=>{
    let newPeople= people.filter(person=>{
      return person.id !== id
    })
    setPeople(newPeople)
  }

  return<>
    {people.map(person=>{
      const {id, name}=person
      return(
        <div className='item' key={id}>
        <h4>{name}</h4>
        <button type='button' onClick={()=> removePerson(id)}>remove me</button>
        </div>
      )
    })}
    <button type='button' className='btn' onClick={()=>setPeople([])}>Clear all</button>
  </>
};

export default UseStateArray;
