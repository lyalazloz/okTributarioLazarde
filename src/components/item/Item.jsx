import React from 'react'
import "./item.scss"
import {ItemCount} from '../itemCount/ItemCount.jsx'

export const Item=({product})=> {
    return ( 
        <div className="item">
            
            <div className="itemPicture" ><img src={product.pictureUrl} alt={product.alt} /></div>
            <div className="itemBody" >
                <h3 className="itemTitle">{product.title}</h3>
                <div className="itemDescription">
                <h5>{product.description}</h5>
                </div>
                <div className="itemPrice">
                    <h3>{product.price}</h3>
                </div>   
                <div>
                    <ItemCount stock={product.stock}  initial="1"/>
                </div>
            </div>                        
        </div>
    )
}


