import React from 'react'
import {Item} from '../item/Item.jsx'
import "../itemList/itemList.scss"


export const ItemList=({products})=> {
   
    return (
        <div  className="itemList">
            {products.map(product =>{
                return <Item product={product} key={product.id}/>
             })
            }
        </div>
    )
}
