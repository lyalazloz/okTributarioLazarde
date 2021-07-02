import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/navBar/navBar";
import { ItemListContainer } from "./pages/itemListContainer/itemListContainer";
import { ItemDetailContainer } from "./pages/itemDetailContainer/itemDetailContainer";

export const App = () => {
  return (
    <Router>
      <main>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/:id"></Route>
        </Switch>
      </main>
    </Router>
  );
};
