import { React, useState, useContext } from "react";
import { Link } from 'react-router-dom'
import "./itemDetail.scss";
import { ItemCount } from "../itemCount/itemCount.jsx";
import { CartContext } from '../../context/cartContext'

export const ItemDetail = ({ item }) => {
  
  const {id, title, price, pictureUrl, description, stock, alt} = item 
  const [totalToPay, setTotalToPay] = useState(0)    
  const [quantity, setQuantity] = useState(0)
  const [hidden, setHidden] = useState(false)
  const { addItem } = useContext(CartContext)

  const priceItem= quantity * price
  setTotalToPay(priceItem)   
    
  const onAdd = (quantity) => {
    setHidden(true)         
    setQuantity(quantity)
    addItem(item, quantity)
  }

  return (
    <article className="itemDetail" id={id}>
      <div className="wrapper">
        <div className="row">
          <div className="itemPicture">
            <img src={pictureUrl} alt={alt} />
          </div>
          <div className="itemBody row">
            <div className="itemTitle">
              <h3>{title}</h3>
            </div>
            <div className="itemDescription">
              <p>{description}</p>
            </div>
            <div className="itemPrice">
              <h3>${price}</h3>
            </div >
            <div hidden={!hidden}>
            <ItemCount stock={stock} initial="1" onAdd={onAdd}/>  
            </div>
            <div id="bought" hidden={hidden}>              
            <p>Estás comprando {quantity} {title} por ${totalToPay}</p>
              <Link to='/cart'>
                <button className="finishBuy">Terminar mi compra</button>
              </Link>
              <Link to='/'>
                <button id='btnContinue'>Continuar comprando</button>
              </Link>
            </div>            
          </div>
        </div>
      </div>
    </article>
  );
};


