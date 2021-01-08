import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  const fetched = useFetch(url)
  const items = fetched.products.map(product=>{
    return(<li>{product.fields.name}</li>)
  })
  return (
    <div>
      <h2>{fetched.loading ? 'loading...' : 'data'}</h2>
      <ul>
      {items}
      </ul>
    </div>
  )
}

export default Example
