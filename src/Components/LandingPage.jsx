import React, { useState } from 'react'
import '../assets/styles/landingpage.css'
import AdminLogin from './Admin/AdminLogin'
import UsersLogin from './Users/UsersLogin'


const LandingPage = () => {

  let [bool, setBool] = useState(true)

  let handleBtn = () => {
    setBool(!bool)
  }

   

  return (
    <div className="landingpage" >

      {/* Floating Icons */}
      <div className="floating-icons">
        <span>🛒</span>
        <span>🛍️</span>
        <span>💳</span>
      </div>

      

      <div className="container">

        <div className="head">
          <h2>{bool ? 'ADMIN LOGIN' : 'USER LOGIN'}</h2>

          <div className="btn">
            <button
              onClick={handleBtn}
              className={bool ? 'left' : 'right'}
            >
              {bool ? 'Admin' : 'User'}
            </button>
          </div>
        </div>

        {bool ? <AdminLogin /> : <UsersLogin />}

      </div>
    </div>
  )
}

export default LandingPage