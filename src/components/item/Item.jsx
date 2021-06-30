import React from 'react'
import "./item.scss"
import {ItemCount} from '../itemCount/itemCount.jsx'

export const Item=({item})=> {
    return ( 
        <article className="item" id={item.id}>            
            <div className="itemPicture" ><img src={item.pictureUrl} alt={item.alt} /></div>
            <div className="itemBody" >
                <h3 className="itemTitle">{item.title}</h3>
                <div className="itemDescription">
                <p>{item.description}</p>
                </div>
                <div className="itemPrice">
                    <h3>{item.price}</h3>
                </div>
                <ItemCount stock={item.stock}  initial="1"/>
            </div>                        
        </article>
    )
}


