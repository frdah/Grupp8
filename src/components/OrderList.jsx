import React from "react";
import OrderItem from "./OrderItem";
import { useRef, useEffect, useState } from "react";

export default function OrderList() {
  let totalPrice = 0;
  let [discount, setDiscount] = useState(1);
  let [errorMessage, setErrorMessage] = useState("");
  const itemArr = JSON.parse(localStorage.getItem("itemArr"));
  let [couponList, setCouponList] = useState({});

  const couponInput = useRef();

  function fetchCouponCodes() {
    fetch("https://mock-data-api.firebaseio.com/e-commerce/couponCodes.json")
      .then(res => res.json())
      .then(result => {
        setCouponList(result);
        console.log(result);
      });
  }

  useEffect(() => {
    fetchCouponCodes();
  }, []);

  function handleOnClick() {
    const couponCode = couponInput.current.value;

    Object.entries(couponList).map((item, index) => {
      console.log(item);
      if (item[0] === couponCode) {
        setErrorMessage("");
        console.log("funkar", couponCode, discount);
        setDiscount(item[1].discount);
        // return (discount = item[1].discount);
      } else {
        setErrorMessage("Kod ej giltig!");
      }
    });
  }

  return (
    <div>
      <h2>Order List</h2>
      <OrderItem />

      {itemArr &&
        itemArr.map((itemObj, index) => {
          totalPrice += itemObj.price * itemObj.qty;
          return (
            <div className="col-sm-4">
              {/* TODO: Add key attribute to div. Key should be on the highest level directly after map */}
              <OrderItem
                key={index}
                name={itemObj.name}
                price={itemObj.price}
                qty={itemObj.qty}
              />
            </div>
          );
        })}

      <input type="text" ref={couponInput} />
      <button onClick={handleOnClick}>Använd kupong</button>
      <p>{errorMessage}</p>
      <h3>Totalpris: {totalPrice * discount} SEK</h3>
    </div>
  );
}
