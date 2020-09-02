import React from 'react'
import { useContext } from 'react'
//import import { ProductDetailsContext } from '../contexts/TitleContext'


export default function ProductDetails({name, description, price, stock, imageArr, rating}) {
  let itemObj = {
    name: name,
    price: price,
    qty: 1
  } 
function handleOnClick () {
console.log("current item", itemObj)


if (localStorage.getItem("itemArr") === null){

  const itemArr = []


 itemArr.push(itemObj) 

  localStorage.setItem("itemArr", JSON.stringify(itemArr));
  console.log("in if 1")
}
else {
  const itemArr = JSON.parse(localStorage.getItem("itemArr"))

  const updatedArr = itemArr.map((item, index) => {
      if (item.name === name) {
        console.log("found obj", name)
        item.qty ++
        return item
      }
      else {
        console.log("no obj")
        console.log(itemObj)
        return itemObj
  
      }

  })
  console.log(updatedArr)

  localStorage.setItem("itemArr", JSON.stringify(updatedArr));


}

  /*for (let x = 0; x < itemArr.length; x++) {
    if (itemArr[x].name === name) {
      itemArr[x].qty ++
    }
    else {
      itemArr.push(itemObj) 
      localStorage.setItem("itemArr", JSON.stringify(itemArr));

    }
    console.log(itemArr) 

  }

}*/

}


    return (
        <div>
            <div className="col-xl-12 mt-3">
      <div className="card">
        {imageArr && <img 
          className="card-img-top" 
          src={imageArr[0].src.small} 
          alt="Card cap" />
        }
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>
              {description}
          </p>
          <span>{rating} ★</span><br/>
          <span>Stock: {stock}</span><br/>
          <span>Price: {price}:-</span><br/>
          <button onClick={handleOnClick} className="btn, btn-primary">Buy</button>
        </div>
      </div>
    </div>
        </div>
    )
}
