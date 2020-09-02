import React from "react";
import OrderItem from "./OrderItem";
import { useRef } from "react";

export default function OrderList() {
  const itemArr = JSON.parse(localStorage.getItem("itemArr"));

  /* function handleOnClick () {
    const couponInput = "tjohejjj"
  }*/

  return (
    <div>
      <h2>Order List</h2>
      <OrderItem />

      {itemArr &&
        itemArr.map((itemObj, index) => {
          return (
            <div className="col-sm-4">
              {/* TODO: Add key attribute to div. Key should be on the highest level directly after map */}
              <OrderItem
                key={index}
                name={itemObj.name}
                price={itemObj.price}
                qty={itemObj.qty}
              />
              <input type="text" />
              <button onClick={handleOnClick} ref={couponInput}>
                Använd kupong
              </button>
            </div>
          );
        })}
    </div>
  );
}
