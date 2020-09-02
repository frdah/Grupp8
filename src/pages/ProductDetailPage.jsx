import React from 'react'
import { useEffect, useState } from 'react'
import ProductDetails from '../components/ProductDetails'




export default function ProductDetailPage({props}) {
    let [productData, setProductData] = useState({})
    let ProductId = props.match.params.id;

    function fetchImage() {
      fetch(`https://mock-data-api.firebaseio.com/e-commerce.json`)
        .then(res => res.json())
        .then(result => {
            
            setProductData(result.products[ProductId])
            console.log(productData)

            

        })
        
    }
  
    useEffect(() => {
      fetchImage()

    }, [])

    useEffect(() => {
        console.log(productData)
      }, [productData])



    return (
      <div>
        <h1>Image Detail Page</h1>
        <ProductDetails
        name= {productData.name}
        description= {productData.description}
        price= {productData.price}
        stock= {productData.stock}
        rating= {productData.rating}
        imageArr= {productData.images}
        />
      </div>
    )
}
