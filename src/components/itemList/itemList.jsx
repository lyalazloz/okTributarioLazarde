import "../itemList/itemList.scss";
import { Item } from "../item/item.jsx";
import { useParams } from "react-router-dom";
import React from "react";

export const ItemList = ({item}) => {
  const { id } = useParams(); 
  console.log(id)
    
  const itemsFilters= () =>{
    return id ? item.filter((i) => i.categoryId === id) : item;
  };
  const itemList= itemsFilters();

  return  itemList.map(i =>{
    return <Item item={i} key={i.id} />
  });  
}