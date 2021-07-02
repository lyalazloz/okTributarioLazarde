import React,{useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import ITEMS from '../../data/items.json'
import { ItemList } from "../../components/itemList/itemList"
import "./itemListContainer.scss"

export const ItemListContainer = ( {greeting}) =>{
    const { id } = useParams()
    const [items, setItems] = useState([])

    console.log (id)

    useEffect(() => {
        const getItems = () => {
            return id ? ITEMS.filter((item) => item.categoryId === id) : ITEMS 
        }

        const items = getItems();
        setItems (items)
    }, [id]); 

    return(
        <section className="itemListContainer" >
            <h1>{greeting}</h1>
            <ItemList items={items}/>        
        </section>
    )
}


    // tiempo del video 01:54:37

    // useEffect(() => {
    //     const getItems = async () => {
    //         const response = await fetch("../items.json");
    //         const result = await response.json()
    //         setItems(result)
    //     }
    //     getItems();
    // }, [2000]); 
    // return(
    //     <section className="itemListContainer" >
    //         <h1>{greeting}</h1>
    //         <ItemList items={items}/>        
    //     </section>
    // )