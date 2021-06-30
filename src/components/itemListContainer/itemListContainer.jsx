import { ItemList } from "../itemList/itemList"
import React,{useEffect, useState} from "react"
import "../itemListContainer/itemListContainer.scss"

export const ItemListContainer = ( {greeting}) =>{

    const [items, setItems] = useState([])

    useEffect(() => {
        const getItems = async () => {
            const response = await fetch("../items.json");
            const result = await response.json()
            setItems(result)
        }
        getItems();
    }, [2000]); 

    return(
        <section className="itemListContainer" >
            <h1>{greeting}</h1>
            <ItemList items={items}/>        
        </section>
    )
}