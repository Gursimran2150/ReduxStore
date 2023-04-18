
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {add,remove} from './reducers/cartSlice'
import {fetchData} from './reducers/productsSlice'

const Home = () => {
  
  const products = useSelector((state)=>state.products.data)
  const status = useSelector((state)=>state.products.status)
  const dispatch = useDispatch();

  useEffect(()=>{
     dispatch(fetchData())
     console.log('i am working')
     
  },[])

  function handleClick(product){
      dispatch(add(product));
  }

  if(status==='loading'){
    return <>

    <div>Loading....</div>
    </>
  }
  if(status==='error'){
    return <>

    <div>Something went wrong!</div>
    </>
  }
  

return (
  <div className='card-wrapper'>

      {
          products.map(product=>{
              return(
                  <div key={product.id} className='product-card'>
                      <img src={product.image} alt={product.name}/>
                      <h2>{product.title}</h2>
                      <p>{product.name}</p>
                      <p>${product.price}</p>
                      <button onClick={()=>{handleClick(product)}}>Add to Cart</button>
                  </div>
              )
          })
      }
     
  </div>
    )
}

export default Home