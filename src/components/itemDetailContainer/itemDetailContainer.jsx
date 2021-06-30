import React,{useEffect, useState} from "react"
import { Item } from "../item/item";
import { ItemList } from "../itemList/itemList"
import "../itemListContainer/itemListContainer.scss"

export const ItemDetailContainer = () =>{

  const [item, setItem] = useState([])

  useEffect(() => {
    const getItem = async () => {
      const response = await fetch("../items.json");
      const result = await response.json()
      setItem(result)
    }
    getItem();
  }, [2000]); 

  return <ItemDetail/>      
}