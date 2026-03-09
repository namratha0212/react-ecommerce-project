import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Products from '../Products'
import ViewMore from '../ViewMore'
import AddProducts from './AddProducts'
import AddUsers from './AddUsers'
import DisplayUsers from './DisplayUsers'
import CartItems from '../Users/CartItems'

const AdminPortal = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="viewmore/:id" element={<ViewMore/>}/>
        <Route path="addproducts" element={<AddProducts/>}/>
        <Route path="addusers" element={<AddUsers/>}/>
        <Route path="displayusers" element={<DisplayUsers/>}/>
        <Route path="cartitems" element={<CartItems/>}/>
      </Routes>

    </>
  )
}

export default AdminPortal