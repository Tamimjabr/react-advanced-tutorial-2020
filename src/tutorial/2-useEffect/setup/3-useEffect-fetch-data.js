import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers]= useState([])

  const getUsers= async()=>{
    const response= await fetch(url)
    const users = await response.json()
    setUsers(users)
    console.log(users)
  }
console.log(users)
  //todo you can't do useEffect(async())
  useEffect(()=>{
    getUsers()
    // only on the initial rendering otherwise it would be a endless loop
  },[])

  return(
    <>
    <h3>Github users</h3>
    <ul className='users'>
    {users.map((user)=>{
      return <li key={user.id}>
        <img src={user.avatar_url} alt="user"></img>
        <a href={user.html_url}>Profil</a>
      </li>
    })}
    </ul>

    </>
  );
};

export default UseEffectFetchData;
