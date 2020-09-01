import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  let [productList, setProductList] = useState({});

  function fetchProductList() {
    fetch("https://mock-data-api.firebaseio.com/e-commerce/products.json")
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setProductList(result);
      });
  }

  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <div>
      <div className="card-box row">
        {productList &&
          Object.entries(productList).map((itemArray, index) => {
            let item = itemArray[1];

            return (
              <div>
                <ProductCard
                  key={index}
                  id={index}
                  name={item.name}
                  image={item.images[0].src.small}
                  description={item.description}
                  price={item.price}
                  stock={item.stock}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
