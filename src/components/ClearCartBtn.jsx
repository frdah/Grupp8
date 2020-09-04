import React from "react"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

export default function ClearCartBtn() {
	const { cartList, setCartList } = useContext(CartContext)

	function handleOnClick() {
		localStorage.clear()
		setCartList([])
	}

	return (
		<div>
			<button onClick={handleOnClick} className="my-3">
				Clear cart
			</button>
		</div>
	)
}
