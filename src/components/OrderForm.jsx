import React from "react";
import {useContext, useRef} from "react"
import {CartContext} from "../contexts/CartContext"

export default function OrderForm({total}) {
  const ORDER_URL = "https://mock-data-api.firebaseio.com/e-commerce/orders/group-8.json"
  const {setCartList, cartList, totalPrice} = useContext(CartContext)
  const userNameInput = useRef()

  console.log(totalPrice)

  function handlePostOrder () {
    const url = ORDER_URL
    const data = {
      name: userNameInput.current.value,
      order: cartList,
      total: totalPrice.toFixed(2)
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    
    localStorage.clear()
    setCartList([])

  }


  return (
    <div className="order-form">
      <p>Order Form</p>
      <input type="text" ref={userNameInput} className="form-control w-25" placeholder="Costumer Name" />

      <button onClick={handlePostOrder}className="btn btn-primary mb-2">Place order</button>
    </div>
  );
}
