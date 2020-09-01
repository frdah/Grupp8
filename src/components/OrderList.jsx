import React from "react";
import OrderItem from "./OrderItem";

export default function OrderList() {
  return (
    <div>
      <h2>Order List</h2>
      <OrderItem />

      <p>Add coupon code:</p>
      <input className="form-control w-25" placeholder="Coupon Code" />
      <button className="btn btn-primary mb-2">Add Coupon</button>
      <h5>Total: 0kr </h5>
    </div>
  );
}
