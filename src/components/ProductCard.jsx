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
		<div className="product-card card my-3 mx-2 bg-light shadow">
			<div className="card-body p-3">
				<img className="card-img-top img-productlist" src={image} alt="" />
				<h4 className="card-title mt-3">{name}</h4>
				<p className="card-text">{shortDescription}...</p>
				<h5 className="card-text">{price} SEK</h5>
				<Link className="btn btn-info" to={`/products/${id}`}>
					Read more
				</Link>
			</div>
		</div>
	)
}
