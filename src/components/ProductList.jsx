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
								<div className="col-12 col-md-6 col-xl-4 mt-5" key={item.id}>
									
									<ProductCard
										
										id={item.id}
										name={item.name}
										description={item.description}
										image={item.images[0].src.small}
										price={item.price}
									/>
								</div>
							)
						})}
				</div>
			</div>
		</div>
	)
}
