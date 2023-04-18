import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const cartItems = useSelector(state=> state.cart.length)

  return (
    <div className='main-nav'>
        <div className='main-nav-left'>
            <h1>Redux Store.</h1>
        </div>
        <div className='main-nav-right'>
           <NavLink to={'/'}> <p>Home</p></NavLink>
            <NavLink to={'/cart'}><p>Cart <span>[{cartItems} Items]</span></p></NavLink>
        </div>

    </div>
  )
}

export default Navbar