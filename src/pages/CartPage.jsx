import React from "react"
import OrderForm from "../components/OrderForm"
import OrderList from "../components/OrderList"

export default function CartPage() {
	return (
		<div className="container card my-5 p-5 bg-light">
			<OrderList />
			{/* <OrderForm /> */}
		</div>
	)
}
