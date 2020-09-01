import React from "react";

export default function OrderForm() {
  return (
    <div className="order-form">
      <p>Order Form</p>
      <input className="form-control w-25" placeholder="Costumer Name" />

      <button className="btn btn-primary mb-2">Place order</button>
    </div>
  );
}
