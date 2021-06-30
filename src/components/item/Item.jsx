import React from 'react'
import "./item.scss"
import {ItemCount} from '../itemCount/itemCount.jsx'
import{ItemDetailContainer} from "../itemDetailContainer/itemDetailContainer"

export const Item=({item})=> {
    return ( 
        <article className="item" id={item.id}>
            <div class="wrapper">
                <div class="column">
                    <div className="itemPicture" ><img src={item.pictureUrl} alt={item.alt} /></div>
                    <div className="itemBody column" >
                        <div className="itemTitle">
                            <h3>{item.title}</h3>
                        </div>
                        <div className="itemDescription">
                            <p>{item.shortDescription} <a href="#">ver más</a></p>
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


