import React from 'react'
import {Item} from '../item/item.jsx'
import "../itemList/itemList.scss"

export const ItemList=({items})=> {
   
    return (
        <div  className="itemList">
            {items.map(item =>{
                return <Item item={item} key={item.id}/>
                })
            }
        </div>
    )
}
