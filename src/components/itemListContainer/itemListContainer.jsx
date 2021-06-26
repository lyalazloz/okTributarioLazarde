import { ItemList } from "../itemList/itemList"
import React,{useEffect, useState} from "react"
import "../itemListContainer/itemListContainer.scss"

export const ItemListContainer = ( {greeting}) =>{

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("../products.json");
            const result = await response.json()
            setProducts(result)
        }
        fetchData();
    }, [2000]); 

    return(
        <div className="itemListContainer" >
            <h1>{greeting}</h1>
            <ItemList products={products}/>        
        </div>
    )
}