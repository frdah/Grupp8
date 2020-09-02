import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import { Switch, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";



function App() {
  return (
    <div>

      <Switch>

      <Route path="/products/:id" render={ props => {
          return (
              <ProductDetailPage props={props} />
          )
        }} >
          
        </Route>
        <Route path="/cartpage">
          <CartPage />
        </Route>
        <Route path="/">
          <ProductPage />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
