import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../../assets/styles/displayusers.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation } from 'react-router-dom';

const DisplayUsers = () => {

  let [users, setUsers] = useState([])

  let location = useLocation()

  let bool = location.pathname.startsWith('/adminportal')

  let fetchUsersApi = async () => {

      let userApi = await axios.get("http://localhost:4000/users")
      let respdata = userApi.data
      setUsers(respdata)

  }

  useEffect(() => {

    fetchUsersApi()

  }, [])

  let deleteUser = (id) => {
        
        let confirmDelete = window.confirm("Do you want to delete this user?")

        if(confirmDelete){
            axios.delete(`http://localhost:4000/users/${id}`)
            alert('User is Deleted')

            window.location.reload()
        }
        else {
            alert('User is not Deleted')
        }
    }

  return (
    <div className="displayusers">

      <h2>Registered Users</h2>

      <table>

        <thead>
          <tr>
            <th>Sl.No.</th>
            <th>Username</th>
            <th>Phone Number</th>
            {bool && <th>Email</th>}
            {bool && <th>Password</th>}
            {bool && <th>DOB</th>}
            <th>Age</th>
            {bool && <th>Delete</th>}
          </tr>
        </thead>

        <tbody>

          {
            users.map((elem,index)=>{

              let {id,username,phno,email,password,dateofbirth} = elem
              let age = new Date().getFullYear() - dateofbirth.slice(0,4)

              return(
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{username}</td>
                  <td>{phno}</td>
                  {bool && <td>{email}</td>}
                  {bool && <td>{password}</td>}
                  {bool && <td>{dateofbirth}</td>}
                  <td>{age}</td>
                  {bool && (
                    <td>
                      <button onClick={() => deleteUser(id)}>
                        <DeleteIcon/>
                      </button>
                    </td>
                  )}
                </tr>
              )
            })
          }
             
        </tbody>

      </table>

    </div>
  )
}

export default DisplayUsers