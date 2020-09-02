import React from "react";

export default function OrderItem({ name, price, qty }) {
  return (
    <div>
      <h5>{name}</h5>
      <p>{price}:-</p>
      <p>{qty}</p>
    </div>
  );
}
