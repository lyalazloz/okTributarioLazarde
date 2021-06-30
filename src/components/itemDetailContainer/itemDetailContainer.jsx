import React,{useEffect, useState} from "react"
import { ItemDetail } from "../itemDetail/itemDetail";
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

  return <ItemDetail item= {item}/>      
}