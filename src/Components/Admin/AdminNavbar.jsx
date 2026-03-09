import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/styles/navbar.css'

const AdminNavbar = () => {
  return (
    <nav className="mynavbar">

      <div className="logo">
        {/* <h1>Admin</h1> */}
      </div>

      <div className="links">
        <ul>
          <li><NavLink to="/adminportal">HOME</NavLink></li>
          <li><NavLink to="/adminportal/products">PRODUCTS</NavLink></li>
          <li><NavLink to="/adminportal/displayusers">USERS</NavLink></li>
          <li><NavLink to="/adminportal/cartitems">CART ITEMS</NavLink></li>
          <li><NavLink to='/adminportal/addusers'>ADD USERS</NavLink></li>
          <li><NavLink to="/">LOGOUT</NavLink></li>
        </ul>
      </div>

    </nav>
  )
}

export default AdminNavbar