import React from 'react'
import { Link } from 'react-router-dom';
import "./item.scss"
import {ItemCount} from '../itemCount/itemCount.jsx'

export const Item=({item})=> {
    return (
        <article className="item" id={item.id}>                 
            <div className="wrapper">
                <div className="column">
                    <div className="itemPicture" ><img src={item.pictureUrl} alt={item.alt} /></div>
                    <div className="itemBody column" >
                        <Link to={`/item/${item.id}`}>
                            <div className="itemTitle">
                                <h3>{item.title}</h3>
                            </div>
                            <div className="itemDescription">
                                <p>{item.shortDescription} ver más</p>
                            </div>
                            <div className="itemPrice">
                                <h3>{item.price}</h3>
                            </div>
                        </Link>
                        <div>
                            <ItemCount stock={item.stock}  initial="1"/>
                        </div>                    
                    </div>
                </div>
            </div>                 
        </article>               
    )
}


