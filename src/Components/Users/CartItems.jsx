import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../assets/styles/cartitems.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { toast } from 'react-toastify';

const CartItems = () => {

  let [cartItems, setCartItems] = useState([])

  // FETCH CART
  let fetchCart = async () => {
    let res = await axios.get("http://localhost:4000/cart")
    setCartItems(res.data)
  }

  useEffect(() => {
    fetchCart()
  }, [])


  // REMOVE ITEM
  let removeItem = async (id) => {

    await axios.delete(`http://localhost:4000/cart/${id}`)

    let updated = cartItems.filter(item => item.id !== id)

    setCartItems(updated)

    toast.success('Product deleted successfully')
  }


  // INCREMENT QUANTITY
  let increment = async (item) => {

    let newQty = item.quantity + 1

    await axios.patch(
      `http://localhost:4000/cart/${item.id}`,
      { quantity: newQty }
    )

    fetchCart()
  }


  // DECREMENT QUANTITY
  let decrement = async (item) => {

    if (item.quantity > 1) {

      let newQty = item.quantity - 1

      await axios.patch(
        `http://localhost:4000/cart/${item.id}`,
        { quantity: newQty }
      )

      fetchCart()
    }
  }


  // GRAND TOTAL
  let grandTotal = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity * 80)
  }, 0)


  return (

    <div className="cartitems">

      <h2>Cart Items</h2>

      <table>

        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>

          {
            cartItems.map((item, index) => (

              <tr key={item.id}>

                <td>{index + 1}.</td>

                <td>
                  <img src={item.image} alt={item.title} />
                </td>

                <td>{item.title}</td>

                <td>{item.category}</td>

                <td className="qty-control">

                  <button onClick={() => decrement(item)}>-</button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increment(item)}>+</button>

                </td>

                <td>
                  Rs. {item.price * item.quantity * 80}
                </td>

                <td>

                  <DeleteOutlineIcon
                    className="delete-icon"
                    onClick={() => removeItem(item.id)}
                  />

                </td>

              </tr>

            ))
          }

        </tbody>

      </table>

      {/* GRAND TOTAL */}

      <div className="grand-total">
        <h3>Grand Total : ₹ {grandTotal}</h3>
      </div>

    </div>

  )
}

export default CartItems