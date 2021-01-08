import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PersonContex=React.createContext()


const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContex.Provider value={{removePerson, people, message:'helloword'}}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContex.Provider>
  );
};

const List = () => {
  const mainData=useContext(PersonContex)
  console.log(mainData)
  return (
    <>
      {mainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name}) => {
  const {removePerson, message }= useContext(PersonContex)
  console.log(data)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
      <h4>{message}</h4>
    </div>
  );
};

export default ContextAPI;
