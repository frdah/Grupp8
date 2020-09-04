import React from "react"

export default function ProductReview({
	id,
	date,
	title,
	author,
	description,
	rating,
}) {
	return (
		<div className="row justify-content-md-center">
			<div className="col-xl-6 mt-3">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p>{description}</p>
						<p>Author: {author}</p>
						<p>Date: {date}</p>
						<p>Rating: {rating}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
