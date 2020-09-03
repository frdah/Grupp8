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
		<div>
			<h5>{title}</h5>
			<p>{description}</p>
			<p>Author: {author}</p>
			<p>Date: {date}</p>
			<p>Rating: {rating}</p>
		</div>
	)
}
