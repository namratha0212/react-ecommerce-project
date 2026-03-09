import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../assets/styles/products.css'
import { useLocation, useNavigate } from 'react-router-dom'
const Products = () => {

  let [products, setProducts] = useState([])

  let location = useLocation()
  let pathbool = location.pathname.startsWith('/adminportal')

  let fetchApi = async () => {
    let apidata = await axios.get(`http://localhost:4000/products`)
    let respdata = apidata.data

    setProducts(respdata)
  }

  useEffect(() => {
    fetchApi()
  }, [])


  let [filteredData, setFilteredData] = useState([])
  let [bool, setBool] = useState(false)

  //Not used when onChange(handleChange) is used,
  let handleClick = (e) => {
    let text = e.target.value
    let res = products.filter((elem) => {
      return elem.category === text
    })
  }
    let handleChange = (e) => {
      
    let text = e.target.value

    if(text === 'select category')
      setBool(false)
    else
      setBool(true)

    let res = products.filter((elem) => {
      return elem.category === text
    })

    
    setFilteredData(res)
  }

  let handleDelete = (id) => {
    let deleteBool = confirm("Do you want to delete this product ?")
    if(deleteBool){
      axios.delete(`http://localhost:4000/products/${id}`)
      alert("Product is deleted.")
      window.location.reload()
    }
    else
      alert("Product is not deleted.")
  };


  //Navigate to viewmore
  let navigate = useNavigate()
  let handleViewMore = (id) => {
    if(pathbool)
    navigate(`/adminportal/viewmore/${id}`)
  else
    navigate(`/usersportal/viewmore/${id}`)
  }

  return (
    <>
      <div className="products">
        <h1>Products</h1>

        {/* <div className="category">
          <div className="category_navbar">
              
          </div>
        </div> */}

        <select onChange={handleChange}>
          <option value={`all`}>- - -select category- - -</option>
          <option value={`all`}>All</option>
          <option onClick={handleClick} value={`men's clothing`}>men's clothing</option>
          <option onClick={handleClick} value={`women's clothing`}>women's clothing</option>
          <option onClick={handleClick} value={`jewelery`}>jewelery</option>
          <option onClick={handleClick} value={`electronics`}>electronics</option>
        </select>


        <div className="cards">
          {
            bool ?

            filteredData.map((elem, index) => {
            let {id, title, image } = elem
            return (
              <div className="card" key={index}>
                <img src={image} alt="" />
                <div className="title">{title}</div>

                <div className="btn">
                  <button onClick={() => handleViewMore(id)}>View More</button>
                  <button onClick={() => handleDelete(id)}>Delete</button>
                </div>
              </div>
            )
          })

          :

          products.map((elem, index) => {
            let { id, title, image } = elem
            return (
              <div className="card" key={index}>
                <img src={image} alt="" />
                <div className="title">{title}</div>

                <div className="btn">
                    <button onClick={() => handleViewMore(id)}>View More</button>
                  {
                    pathbool && <button onClick={() => handleDelete(id)}>Delete</button>
                  }
                </div>
              </div>
            )
          })

          }
        </div>
      </div>
    </>
  )
}

export default Products
// npx json-server --watch src/jsondata/appdata.json --port 4000