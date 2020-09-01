import React from "react"
import { Link } from "react-router-dom"

export default function ProductCard({
	id,
	name,
	description,
	image,
	price,
	stock,
}) {
	console.log("ProductCard")
	return (
		<div className="card m-4 p-2 bg-light" width="5vw">
			<div className="card-body p-2">
				<img className="card-img-top" src={image} alt="" />
				<h4 className="card-title mt-3">{name}</h4>
				<p className="card-text">{description}</p>
				<h6 className="card-text">Price: {price} SEK</h6>
				<p className="card-text">In stock: {stock}</p>
				<Link className="btn btn-info" to={`/products/${id}`}>
					Show product
				</Link>
			</div>
		</div>
	)
}
