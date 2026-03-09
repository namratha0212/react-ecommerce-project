import React from 'react'
import UsersNavbar from './UsersNavbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Products from '../Products'
import DisplayUsers from '../Admin/DisplayUsers'
import ViewMore from '../ViewMore'
import CartItems from './CartItems'

const UsersPortal = () => {
  return (
    <>
      <UsersNavbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="viewmore/:id" element={<ViewMore />} />
        <Route path="displayusers" element={<DisplayUsers />} />
        <Route path="cartitems" element={<CartItems />} />
      </Routes>
    </>
  )
}

export default UsersPortal