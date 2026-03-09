import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import '../assets/styles/viewmore.css'
import { toast } from 'react-toastify'

const ViewMore = () => {

  let params = useParams()
  let navigate = useNavigate()
  let location = useLocation()

  let productId = params.id

  let [card, setCard] = useState({})

  let fetchApi = async () => {
    let res = await axios.get(`http://localhost:4000/products/${productId}`)
    setCard(res.data)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  let { title, image, price, description, category, rating } = card

  let closePage = () => {
    navigate("/usersportal/products")
  }

  let addToCart = async () => {

    let bool = window.confirm("Do you want to add this product?")

    if(bool){

      // get existing cart items
      let res = await axios.get("http://localhost:4000/cart")

      // check if product already exists
      let existingProduct = res.data.find(
        item => item.title === title
      )

      if(existingProduct){

        // increase quantity
        await axios.patch(
          `http://localhost:4000/cart/${existingProduct.id}`,
          { quantity: existingProduct.quantity + 1 }
        )

        toast.success("Product quantity increased")

      }
      else{

        let cartProduct = {
          title: title,
          image: image,
          price: price,
          category: category,
          description: description,
          rating: rating,
          quantity: 1
        }

        await axios.post("http://localhost:4000/cart", cartProduct)

        toast.success("Product added to cart 🛒")

      }

    }
    else{

      toast.warn("Product not added")

    }

  }

  return (

    <div className="viewmore">

      <span className="close-btn" onClick={closePage}>✖</span>

      <div className="container">

        <div className="image_container">
          <img src={image} alt={title} width="250" />
        </div>

        <div className="description">

          <h2>{title}</h2>

          <h3>Rs. {price ? price * 80 : ""}</h3>

          <p>⭐ {rating?.rate}</p>

          <p>{category}</p>

          <p>{description}</p>

          <button onClick={addToCart}>
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  )
}

export default ViewMore