import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../assets/styles/navbar.css";

const UsersNavbar = () => {
    return (
        <>

            <ul>
                <li><NavLink to='/usersportal'>HOME</NavLink></li>
                <li><NavLink to='/usersportal/products'>PRODUCTS</NavLink></li>
                <li><NavLink to='/usersportal/displayusers'>USERS</NavLink></li>
                <li><NavLink to='/usersPortal/cartitems'>CART ITEMS</NavLink></li>
                <li><NavLink to='/'>LOGOUT</NavLink></li>
            </ul>

        </>
    )
}

export default UsersNavbar