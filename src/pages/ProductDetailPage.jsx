import React from "react"
import { useEffect, useState } from "react"
import ProductDetails from "../components/ProductDetails"
import ProductReview from "../components/ProductReview"

export default function ProductDetailPage({ props }) {
	let [reviews, setReviews] = useState({})
	let [productData, setProductData] = useState({})
	let ProductId = props.match.params.id

	function fetchReviews() {
		fetch(`https://mock-data-api.firebaseio.com/e-commerce/reviews.json`)
			.then((res) => res.json())
			.then((result) => {
				setReviews(result[ProductId])
			})
	}

	function fetchProduct() {
		fetch(`https://mock-data-api.firebaseio.com/e-commerce.json`)
			.then((res) => res.json())
			.then((result) => {
				setProductData(result.products[ProductId])
			})
	}

	useEffect(() => {
		fetchProduct()
		fetchReviews()
	}, [])

	return (
		<div>
			<ProductDetails
			
				name={productData.name}
				description={productData.description}
				price={productData.price}
				stock={productData.stock}
				rating={productData.rating}
				imageArr={productData.images}
			/>
			<h4 className="row justify-content-center pt-5">Reviews</h4>

			{reviews &&
				Object.entries(reviews).map((review, index) => {
					return (
						<ProductReview
							key = {index}
							author={review[1].author.name}
							date={review[1].date}
							description={review[1].description}
							rating={review[1].rating}
							title={review[1].title}
						/>
					)
				})}
		</div>
	)
}
