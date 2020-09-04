import React from "react"

export default function OrderItem({ img, name, price, qty }) {
	return (
		<div className="row">
			<div className="col-md-8 col-xl-8 col-sm-12">
				<p>{name}</p>
			</div>
			<div className="col-md-2 col-xl-2 col-sm-12">
				<p>{price}</p>
			</div>
			<div className="col-md-2 col-xl-2 col-sm-12">
				<p>{qty}</p>
			</div>
		</div>
	)
}
