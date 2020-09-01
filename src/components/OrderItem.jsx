import React from "react";
import Placeholder from "./placeholder.jpg";

export default function OrderItem() {
  return (
    <div>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-2">
            <img src={Placeholder} className="card-img" alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">Product title</h5>
              <p className="card-text">
                Product Discription. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
              <p className="card-text">
                <small className="text-muted">Product Price</small>
              </p>
              <p className="card-text">
                <small className="text-muted">Product Qty</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
