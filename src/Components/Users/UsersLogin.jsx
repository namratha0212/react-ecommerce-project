import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { toast } from 'react-toastify';

const UsersLogin = () => {

  let [showPassword, setShowPassword] = useState(false)
  let [data,setData] = useState([])

  // navigation
  let navigate = useNavigate()



  let userApi = async () =>{
    let usersApidata = await axios.get(`http://localhost:4000/users`)
    // console.log(usersApidata)

    setData(usersApidata.data)

  }

  useEffect(()=>{
    userApi()
  },[])

  // console.log(data)

  // collecting all email and password from json server

  let allEmail =  data.map((elem)=>{

    return elem.email

  })

  // console.log(allEmail)

  let allPswd = data.map((elem)=>{
    return elem.password
  })
  // console.log(allPswd)


  // Collect input values
  let [formdata, setFormdata] = useState({
    email: "",
    password: ""
  })

  let handleInput =(e)=>{
    let keyName = e.target.name
    let keyValue = e.target.value
    setFormdata({...formdata, [keyName]:keyValue})
  }


  let handleSubmit = (e)=>{
    e.preventDefault()

    // console.log(formdata)
    
    // object destructuring (input values)
    let {email,password} = formdata
     
    // check email is present or not
    let emailIndexPos = allEmail.indexOf(email)

    let err = `solid 1px red`

    if(emailIndexPos !== -1){
      if(allPswd[emailIndexPos] === password){
        // console.log('welcome')
        navigate(`/usersportal`)
        toast.success('Login successful')

      }
      else{
        // console.error('password is invalid')
        e.target[1].style.border = err
        toast.error('Password is invalid')
      }
      

    }else{
      // console.error('Email is invalid')
      e.target[0].style.border = err
      toast.error('Email is invalid')
    }

    
  }
  

  return (
    <div className="formbox">
      <form onSubmit={handleSubmit}>
        <input type="email" 
        placeholder="Enter email" 
        name='email'
        value={formdata.email}
        onChange={handleInput}/>

        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            name='password'
            value={formdata.password}
            onChange={handleInput}
          />

          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </span>
        </div>

        <button>User Login</button>
      </form>

      <Link>Forgotten password?</Link>
    </div>
  )
}

export default UsersLogin