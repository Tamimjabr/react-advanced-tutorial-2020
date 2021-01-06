import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isloading, setIsLoading]= useState(true)
  const [isError, setIsError]= useState(false)
  const [user, setUser]=useState([])

  const getUser= async ()=>{
    try{
      const response = await fetch(url)

      const user=await response.json()
      // check if we get data using the response.status
      if(response.status>=200 && response.status < 300){
        setUser(user)
        setIsLoading(false)
      }else{
        setIsLoading(false)
        setIsError(true)
      }
    }catch{
      console.log('error while fetching')
      // remove loading on error
      setIsLoading(false)
      setIsError(true)
    }

  }

  useEffect(()=>{
    getUser()
    // call only on the initial render
  },[])

  if (isloading){
    return <h1>Loading...</h1>
  }
  if(isError){
    return(
      <div>
        <h1>Error...</h1>
      </div>
    )
  }
  return <h2>{user.login}</h2>;
};

export default MultipleReturns;
