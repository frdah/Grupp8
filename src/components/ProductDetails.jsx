import React from "react";
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext";
// import { useContext } from "react";
// import { CartContext } from "../contexts/CartContext";

export default function ProductDetails({
  name,
  description,
  price,
  stock,
  imageArr,
  rating
}) {
  let itemObj = {
    name: name,
    price: price,
    qty: 1
  };
  const { cartList, setCartList} = useContext(CartContext)
  // const { name, description, price, stock, imageArr, rating } = useContext(
  //   CartContext
  // );
  function handleOnClick() {
    if (localStorage.getItem("itemArr") === null) {
      const itemArr = [];

      itemArr.push(itemObj);
      setCartList(itemArr)

      localStorage.setItem("itemArr", JSON.stringify(itemArr));

      console.log("in if 1");
    } else {
      const itemArr = JSON.parse(localStorage.getItem("itemArr"));

      let isNewObject = true;

      const updatedArr = itemArr.map((item, index) => {
        console.log("Current name is: ", name);
        if (item.name === name) {
          item.qty++;
          isNewObject = false;
        }
        return item;
      });
      if (isNewObject) {
        updatedArr.push(itemObj);
      }
      console.log(updatedArr);
      
      setCartList(updatedArr)
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
          {imageArr && (
            <img
              className="card-img-top"
              src={imageArr[0].src.small}
              alt="Card cap"
            />
          )}
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p>{description}</p>
            <span>{rating} ★</span>
            <br />
            <span>Stock: {stock}</span>
            <br />
            <span>Price: {price}:-</span>
            <br />
            <button onClick={handleOnClick} className="btn, btn-primary">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
