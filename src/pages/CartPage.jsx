import React from "react";
import OrderForm from "../components/OrderForm";
import OrderList from "../components/OrderList";

export default function CartPage() {
  return (
    <div className="container">
      <h1>Cart Page</h1>
      <OrderList />
      {/* <OrderForm /> */}
    </div>
  );
}
