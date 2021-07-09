import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Cart } from "./components/cart/cart.jsx";
import { CartProvider } from './context/cartContext'
import { ItemDetailContainer } from "./pages/itemDetailContainer/itemDetailContainer";
import { ItemListContainer } from "./pages/itemListContainer/itemListContainer";
import { NavBar } from "./components/navBar/navBar";
import React from "react";

export const App = () => {
  return (
  
    <Router>     
      <CartProvider>
        <main>          
          <NavBar/>
          <Switch>
            <Route exact path="/"><ItemListContainer /></Route>
            <Route exact path="/category/:id"><ItemListContainer /></Route>
            <Route exact path="/item/:id"><ItemDetailContainer /></Route>
            <Route exact path="/:id"></Route>
            <Route exact path="/cart"><Cart /></Route>
          </Switch>          
        </main>   
      </CartProvider>    
    </Router>    
  );
};
