import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ITEMS from "../../data/items.json";
import { ItemList } from "../../components/itemList/itemList";
import "./itemListContainer.scss";
// import { dataBase } from "../../firebase/firebase";

export const ItemListContainer = ({ greeting }) => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  
  
  useEffect(() => {
    const getItems = () => {
      return id ? ITEMS.filter((item) => item.categoryId === id) : ITEMS;
    };

    const items = getItems();
    setItems(items);
  }, [id]);

  return (
    <section className="itemListContainer">
      <h1>{greeting}</h1>
      <ItemList items={items} />
    </section>
  );
};


///

// useEffect(() => {
//   setLoading(true);
//   const db = getFirestore();
//   const itemColletion = db.collection("items");

//   itemColletion.get().then((querySnapshot) => {
//     if(querySnapshot)
//   })
// }

// )