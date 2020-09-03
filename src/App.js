import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState }  from "react"
import ProductPage from "./pages/ProductPage";
import { Switch, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { CartContext } from "./contexts/CartContext";
import Layout from "./components/Layout";

function App() {
  let [cartList, setCartList] = useState([])

  return (
    <div>
      <CartContext.Provider value={{cartList, setCartList}}>
      <Switch>
        <Route
          path="/products/:id"
          render={(props) => {
            return (
              <Layout>
                <ProductDetailPage props={props} />
              </Layout>
            );
          }}
        ></Route>
        <Route path="/cartpage">
          <Layout>
            <CartPage />
          </Layout>
        </Route>

        <Route path="/">
          <Layout>
            <ProductPage />
          </Layout>
        </Route>
      </Switch>
      </CartContext.Provider>
    </div>
  );
}

export default App;
