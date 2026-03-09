import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const AdminLogin = () => {

  let [formdata, setFormdata] = useState({ email: "", password: "" })

  let errMsz = useRef()

  let navigate = useNavigate()

  let [showPassword, setShowPassword] = useState(false)

  let handdleInput = (e) => {
    let keyName = e.target.name
    let keyValue = e.target.value

    // console.log(keyName,keyValue)

    setFormdata({ ...formdata, [keyName]: keyValue })

  }

  let handleSubmit = (e) => {
    e.preventDefault()
    // console.log(formdata)

    // here collecting data from form Input field
    let { email, password } = formdata


    // here, creating admin credentials
    let credentials = {
      adminMail: 'admin@gmail.com',
      adminPswd: 'Admin@123'
    }

    let { adminMail, adminPswd } = credentials

    // check input data & credentials

    if (email === adminMail && password === adminPswd) {
      navigate('/adminportal')

    }
    else {
      // console.log('Moye Moye')
      let err = 'solid 1px red'
      e.target[0].style.border = err
      e.target[1].style.border = err
      errMsz.current.innerText = `email or password is invalid`
    }

    setFormdata({ email: "", password: "" })


  }
  return (
    <>
      <div className="admin-login">
        <div className="formbox">
          <form onSubmit={handleSubmit}>
            <input type="email"
              placeholder='Enter email'
              onChange={handdleInput}
              name='email'
              value={formdata.email}

            />


            <div className="password-field">

              <input type={showPassword ? "text" : "password"}
                placeholder='Enter password'
                onChange={handdleInput}
                name='password'
                value={formdata.password}
              />

              <span className='eye-icon' onClick={()=>{
                return setShowPassword(!showPassword)
              }}>
                {showPassword ? <VisibilityIcon/>: <VisibilityOffIcon/>}
              </span>


            </div>
            <div ref={errMsz} style={{ color: 'red', fontSize: 'small', textAlign: 'right' }}>

            </div>


            <button>Admin Login</button>
          </form>

          <Link>Forgotten password?</Link>

        </div>
      </div>

    </>
  )
}

export default AdminLogin