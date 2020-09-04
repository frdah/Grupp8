import React from "react"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
// import { useContext } from "react";
// import { CartContext } from "../contexts/CartContext";

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
	// const { name, description, price, stock, imageArr, rating } = useContext(
	//   CartContext
	// );
	function handleOnClick() {
		if (localStorage.getItem("itemArr") === null) {
			const itemArr = []

			itemArr.push(itemObj)
			setCartList(itemArr)

			localStorage.setItem("itemArr", JSON.stringify(itemArr))

			console.log("in if 1")
		} else {
			const itemArr = JSON.parse(localStorage.getItem("itemArr"))

			let isNewObject = true

			const updatedArr = itemArr.map((item, index) => {
				console.log("Current name is: ", name)
				if (item.name === name) {
					item.qty++
					isNewObject = false
				}
				return item
			})
			if (isNewObject) {
				updatedArr.push(itemObj)
			}
			console.log(updatedArr)

			setCartList(updatedArr)
			localStorage.setItem("itemArr", JSON.stringify(updatedArr))
		}

		/*for (let x = 0; x < itemArr.length; x++) {
    if (itemArr[x].name === name) {
      itemArr[x].qty ++
    }
    else {
      itemArr.push(itemObj) 
      localStorage.setItem("itemArr", JSON.stringify(itemArr));

    }
    console.log(itemArr) 

  }

}*/
	}

	return (
		<div className="row justify-content-center">
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
