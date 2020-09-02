import React from "react"
import { useState, useEffect } from "react"
import ProductCard from "./ProductCard"

export default function ProductList() {
	let [productList, setProductList] = useState({})

	function fetchProductList() {
		fetch("https://mock-data-api.firebaseio.com/e-commerce/products.json")
			.then((res) => res.json())
			.then((result) => {
				console.log(result)
				setProductList(result)
			})
	}

	useEffect(() => {
		fetchProductList()
	}, [])

	return (
		<div>
			<div className="container">
				<div className="row">
					{productList &&
						Object.entries(productList).map((itemArray, index) => {
							let item = itemArray[1]

							return (
								<div className="col-sm-4">
									<ProductCard
										key={index}
										id={item.id}
										name={item.name}
										image={item.images[0].src.small}
										description={item.description}
										price={item.price}
										stock={item.stock}
									/>
								</div>
							)
						})}
				</div>
			</div>
		</div>
	)
}
