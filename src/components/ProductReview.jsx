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
			<p>{author}</p>
			<p>{date}</p>
			<p>{rating}</p>
		</div>
	)
}
