import "./itemListContainer.scss";
import { ItemList } from "../../components/itemList/itemList";
import React from "react";

export const ItemListContainer = ({ greeting }) => { 
  return (
    <section className="itemListContainer">
      <h1>{greeting}</h1>
      <div className="itemList"><ItemList/></div>      
    </section>
  );
};