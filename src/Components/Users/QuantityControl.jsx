import React, { useState } from 'react'

const QuantityControl = ({ quantity, id, updateQuantity }) => {

  const [qty, setQty] = useState(quantity)

  const increase = () => {
    const newQty = qty + 1
    setQty(newQty)

    if(updateQuantity){
      updateQuantity(id, newQty)
    }
  }

  const decrease = () => {

    if(qty > 1){

      const newQty = qty - 1
      setQty(newQty)

      if(updateQuantity){
        updateQuantity(id, newQty)
      }

    }

  }

  return (

    <div className="qty-control">

      <button onClick={decrease}>-</button>

      <span>{qty}</span>

      <button onClick={increase}>+</button>

    </div>

  )

}

export default QuantityControl