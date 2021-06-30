import React from 'react'
import "./itemDetail.scss"
import {ItemCount} from '../itemCount/itemCount.jsx'

export const ItemDetail=({item})=> {
    return ( 
        <article className="itemDetail" id={item.id}>
            <div class="wrapper">
                <div class="column">
                    <div className="itemPicture" ><img src={item.pictureUrl} alt={item.alt} /></div>
                    <div className="itemBody column" >
                        <div className="itemTitle">
                            <h3>{item.title}</h3>
                        </div>
                        <div className="itemDescription">
                            <p>{item.description}</p>
                        </div>
                        <div className="itemPrice">
                            <h3>{item.price}</h3>
                        </div>
                        <div>
                            <ItemCount stock={item.stock}  initial="1"/>
                        </div>                    
                    </div>
                </div>
            </div>                 
        </article>
    )
}
