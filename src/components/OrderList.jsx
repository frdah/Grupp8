import React from "react"
import OrderItem from "./OrderItem"
import OrderForm from "./OrderForm"

import { useRef, useEffect, useState, useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import ClearCartBtn from "./ClearCartBtn"

export default function OrderList() {
	let [discount, setDiscount] = useState(1)
	let [errorMessage, setErrorMessage] = useState("")
	const localStorageArr = JSON.parse(localStorage.getItem("itemArr"))
	let [couponList, setCouponList] = useState({})

	const couponInput = useRef()

	const {cartList, setCartList, totalPrice, setTotalPrice} = useContext(CartContext)
	let totalPriceCount = 0

	console.log("cartList",cartList)

	function fetchCouponCodes() {
		fetch("https://mock-data-api.firebaseio.com/e-commerce/couponCodes.json")
			.then((res) => res.json())
			.then((result) => {
				setCouponList(result)
				console.log(result)
			})
	}

	useEffect(() => {
		fetchCouponCodes()
	}, [])


	function handleOnClick() {
		const couponCode = couponInput.current.value;
	
		Object.entries(couponList).map((item, index) => {
			console.log(item);
			if (item[0] === couponCode) {
			  setErrorMessage("");
			  console.log("funkar", couponCode, discount);
			  return setDiscount(item[1].discount);
			  
			// } else {
			//   console.log("funkar inte");
			//   return setErrorMessage("Kod ej giltig!");
			 }
		  });
		
	}



	return (
		<div>
			<h2>Order List</h2>
			<ClearCartBtn/>
			<OrderItem />

			{cartList == "" ? setCartList(localStorageArr) : ""}
			{cartList &&
				cartList.map((itemObj, index) => {
					setTotalPrice( totalPriceCount += itemObj.price * itemObj.qty)

					return (
						<div className="col-sm-4">
							{/* TODO: Add key attribute to div. Key should be on the highest level directly after map */}
							<OrderItem
								key={index}
								name={itemObj.name}
								price={itemObj.price}
								qty={itemObj.qty}
							/>
						</div>
					)
				})}
				
				
			<input type="text" ref={couponInput} />
			<button onClick={handleOnClick}>Använd kupong</button>
			<p>{errorMessage}</p>
			{setTotalPrice(totalPriceCount * discount)}
			<h3>Totalpris: {totalPrice.toFixed(2)} SEK</h3>
			<OrderForm/>
		</div>
	)
}
