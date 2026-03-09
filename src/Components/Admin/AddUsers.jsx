import React, { useState } from 'react'
import axios from 'axios'

import "../../assets/styles/addusers.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const AddUsers = () => {

  

  let [users, setUsers] = useState({
    username: "",
    phno: "",
    email: "",
    password: "",
    dateofbirth: ""
  })

  let handleInput = (e) => {
    let keyName = e.target.name
    let keyValue = e.target.value
    // console.log(keyName,keyValue)
    setUsers({ ...users, [keyName]: keyValue })
  }

  let handleSubmit = async (e) => {
    e.preventDefault()

    // console.log(users)

    let bool = window.confirm("Do you want to add this user?")

     if(bool){
      await axios.post(`http://localhost:4000/users`, users)

      alert("User is added")
     }
     else{
      alert('user is not added')
     }

      

      setUsers({
        username: "",
        phno: "",
        email: "",
        password: "",
        dateofbirth: ""
      })

      

    
  }

  return (
    <div className="addusers">

      <div className="left-section">
        <div className="brand">
          <ShoppingCartIcon className="brand-icon" />
          <h1>ShopEase</h1>
          <p>Create your account & start shopping today.</p>
        </div>
      </div>

      <div className="right-section">
        <div className="formbox">
          <h2>Registration Form</h2>

          <form>
            <input type="text" placeholder="Enter name"
              onChange={handleInput}
              name="username"
              value={users.username}
              required
            />

            <input type="number" placeholder="Enter phone number"
              onChange={handleInput}
              name="phno"
              value={users.phno}
              required
            />

            <input type="email" placeholder="Enter email"
              onChange={handleInput}
              name="email"
              value={users.email}
              required
            />

            <input type="password" placeholder="Enter password"
              onChange={handleInput}
              name="password"
              value={users.password}
              required
            />

            <input type="date"
              onChange={handleInput}
              name="dateofbirth"
              value={users.dateofbirth}
              required
            />

            <button onClick={handleSubmit}>Add User</button>
          </form>

        </div>
      </div>

    </div>
  )
}

export default AddUsers