import React from "react"
import OrderItem from "./OrderItem"
import { useRef, useEffect, useState } from "react"

export default function OrderList() {
	const itemArr = JSON.parse(localStorage.getItem("itemArr"))
	let [couponList, setCouponList] = useState({})

	const couponInput = useRef()

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
		const couponCode = couponInput.current.value

		const validCouponCode = Object.entries(couponList).map((item, index) => {
			console.log(item)
			if (item[0] === couponCode) {
				const discount = item[1].discount
				console.log("funkar", couponCode, discount)
			} else {
				console.log("funkar inte")
			}
		})
	}

	return (
		<div>
			<h2>Order List</h2>
			<OrderItem />

			{itemArr &&
				itemArr.map((itemObj, index) => {
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
			{/* <p>Totalpris: </p> */}
		</div>
	)
}
