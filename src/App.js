import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import { Switch, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
// import { CartContext } from "./contexts/CartContext";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
