import React from 'react'
import { useEffect, useState } from 'react'
import ProductDetails from '../components/ProductDetails'




export default function ProductDetailPage({id} ) {
    let [productData, setProductData] = useState({})
    let ProductId = 16065;

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



    /*        const title = result.products[ProductId].name
        const description = result.products[ProductId].description
        const price = result.products[ProductId].price
        const imageArr = result.products[ProductId].images
        const stock = result.products[ProductId].stock*/

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
