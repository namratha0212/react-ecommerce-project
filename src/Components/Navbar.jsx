import React from 'react'
import '../assets/styles/navbar.css'

import StorefrontIcon from '@mui/icons-material/Storefront'; // NEW LOGO ICON

import { NavLink, useLocation } from 'react-router-dom'
import AdminNavbar from './Admin/AdminNavbar'
import UsersNavbar from './Users/UsersNavbar'

const Navbar = () => {

  let location = useLocation()
  let path = location.pathname
  let bool = path.startsWith('/adminportal')

  return (
    <div className="mynavbar">

      {/* ===== LOGO ===== */}
      <div className="logo">
        <StorefrontIcon className="logo-icon" />
        <h1>ShopEase</h1>
      </div>

      {/* ===== LINKS ===== */}
      <div className="links">
        {
          bool ? <AdminNavbar/> : <UsersNavbar/>
        }
      </div>

    </div>
  )
}

export default Navbar