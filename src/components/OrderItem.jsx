import React from "react";
import Placeholder from "./placeholder.jpg";

export default function OrderItem({name, price, qty}) {

  return (
    <div>
      <h5>{name}</h5>
      <p>{price}:-</p>
      <p>{qty}</p>

    </div>
  );
}
