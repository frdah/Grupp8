import React from "react"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

export default function ProductDetails({
	name,
	description,
	price,
	stock,
	imageArr,
	rating,
}) {
	let itemObj = {
		name: name,
		price: price,
		qty: 1,
	}
	const { cartList, setCartList } = useContext(CartContext)

	function handleOnClick() {
		if (localStorage.getItem("itemArr") === null) {
			const itemArr = []

			itemArr.push(itemObj)
			setCartList(itemArr)

			localStorage.setItem("itemArr", JSON.stringify(itemArr))

		} else {
			const itemArr = JSON.parse(localStorage.getItem("itemArr"))

			let isNewObject = true

			const updatedArr = itemArr.map((item, index) => {
				if (item.name === name) {
					item.qty++
					isNewObject = false
				}
				return item
			})
			if (isNewObject) {
				updatedArr.push(itemObj)
			}
			
			setCartList(updatedArr)
			localStorage.setItem("itemArr", JSON.stringify(updatedArr))
		}
	}

	return (
		<div className="row justify-content-center mt-5">
			<div className="col-12 col-md-6 col-xl-6 mt-3">
				<div className="card">
					{imageArr && (
						<img
							className="card-img-top"
							src={imageArr[0].src.small}
							alt="Card cap"
						/>
					)}
					<div className="card-body">
						<h4 className="card-title">{name}</h4>
						<p className="font-weight-light">{description}</p>
						<p className="mb-0">★ {rating}</p>
						<p>In stock: {stock}</p>
						<div className="row pr-3">
							<h5 className="col-8 font-weight-bold">{price}:-</h5>
							<button onClick={handleOnClick} className="col-4 btn btn-info ">
								Add to cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
