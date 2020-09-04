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
	const shortDescription = description.split(" ").slice(0, 10).join(" ")
	return (
		<div className="product-card card m-4 p-2 bg-light shadow" width="5vw">
			<div className="card-body p-2">
				<img className="card-img-top img-productlist" src={image} alt="" />
				<h4 className="card-title mt-3">{name}</h4>
				<p className="card-text">{shortDescription}...</p>
				<h6 className="card-text">Price: {price} SEK</h6>
				<Link className="btn btn-info" to={`/products/${id}`}>
					Show product
				</Link>
			</div>
		</div>
	)
}
