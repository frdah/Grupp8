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
			<div className="col-12 col-md-6 col-xl-6 mt-3">
				<div className="card">
					<div className="card-header bg-light">
						<h6 className="card-title mb-0">"{title}"</h6>
					</div>
					<div className="card-body">
						<p className="">{description}</p>
						<p>★ {rating} </p>
						<div className="row">
							<p className="col-8 font-weight-bold text-info">{author}</p>
							<p className="col-4 font-italic">{date}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
