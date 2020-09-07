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

	const { cartList, setCartList, totalPrice, setTotalPrice } = useContext(
		CartContext
	)
	let totalPriceCount = 0

	function fetchCouponCodes() {
		fetch("https://mock-data-api.firebaseio.com/e-commerce/couponCodes.json")
			.then((res) => res.json())
			.then((result) => {
				setCouponList(result)
			})
	}

	useEffect(() => {
		fetchCouponCodes()
	}, [])

	function handleOnClick() {
		const couponCode = couponInput.current.value

		Object.entries(couponList).map((item, index) => {
			if (item[0] === couponCode) {
				setErrorMessage("")
				return setDiscount(item[1].discount)
			}
		})
	}

	return (
		<div>
			<h3>My cart</h3>

			<div className="row mt-5">
				<h6 className="col-md-8 col-xl-8 col-sm-12">Product</h6>
				<h6 className="col-md-2 col-xl-2 col-sm-12">Price (SEK)</h6>
				<h6 className="col-md-2 col-xl-2 col-sm-12">Quantity</h6>
			</div>

			<OrderItem />

			{cartList == "" ? setCartList(localStorageArr) : ""}
			{cartList &&
				cartList.map((itemObj, index) => {
					setTotalPrice((totalPriceCount += itemObj.price * itemObj.qty))

					return (
						<div>
							<OrderItem
								key={index}
								name={itemObj.name}
								price={itemObj.price}
								qty={itemObj.qty}
							/>
						</div>
					)
				})}

			<ClearCartBtn />

			<input
				type="text"
				ref={couponInput}
				placeholder=" Add promo code"
				className="mt-4 mb-2"
			/>
			<button onClick={handleOnClick} className="ml-2">
				Add promo code
			</button>
			<p>{errorMessage}</p>
			{setTotalPrice(totalPriceCount * discount)}
			<h5 className="mb-4">Total: {totalPrice.toFixed(2)} SEK</h5>
			<OrderForm />
		</div>
	)
}
