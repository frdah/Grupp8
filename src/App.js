import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ProductPage from "./pages/ProductPage";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <ProductPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
