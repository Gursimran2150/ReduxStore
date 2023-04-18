


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Cart from './Cart'
import Navbar from './Navbar'


function App() {
  

  return (
  <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />

      </Routes>

    </BrowserRouter>
  </>
  )
}

export default App
