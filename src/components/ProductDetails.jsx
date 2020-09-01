import React from 'react'
import { useContext } from 'react'
//import import { ProductDetailsContext } from '../contexts/TitleContext'


export default function ProductDetails({name, description, price, stock, imageArr, rating}) {
    console.log(imageArr)

    return (
        <div>
            <div className="col-xl-12 mt-3">
      <div className="card">
        <img className="card-img-top" src="" alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>
              {description}
          </p>
          <span>{rating} ★</span><br/>
          <span>Stock: {stock}</span><br/>
          <span>Price: {price}:-</span><br/>
          <button className="btn, btn-primary">Buy</button>
        </div>
      </div>
    </div>
        </div>
    )
}
