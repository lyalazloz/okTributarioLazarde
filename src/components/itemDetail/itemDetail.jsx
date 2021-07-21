import "./itemDetail.scss";
import { CartContext } from '../../context/cartContext';
import { ItemCount } from "../itemCount/itemCount.jsx";
import { Link, useParams} from 'react-router-dom'
import { React, useState, useContext} from "react";

export const ItemDetail = (item) => {  
  console.log(item)
  
  const [hidden, setHidden] = useState(false)
  const [quantity, setQuantity] = useState(0)
  const [totalToPay, setTotalToPay] = useState(0)    
  const { addItem } = useContext(CartContext)
  const { id } = useParams();     
  console.log(id)  
  
  const onAdd = (quantity) => {
    setHidden(true)         
    setQuantity(quantity)
    addItem(item, quantity)
  }

  const priceItem= quantity * item.Price
  setTotalToPay(priceItem)  
  
  return (
    <Link to={`/item/${item.id}`}>
      <article className="itemDetail" id={item.id}>
        <div className="wrapper">
          <div className="row">
            <div className="itemPicture">
              <img src={item.pictureUrl} alt={item.pictureAlt} />
            </div>
            <div className="itemBody row">
              <div className="itemTitle">
                <h3>{item.title}</h3>
              </div>
              <div className="itemDescription">
                <p>{item.description}</p>
              </div>
              <div className="itemPrice">
                <h3>${item.Price}</h3>
              </div >
              <div className="itemCount" hidden={!hidden}>
                <ItemCount stock={item.stock} initial="1" onAdd={onAdd}/>  
              </div>
              <div id="bought" hidden={hidden}>              
                <p>Estás comprando {quantity} {item.title} por ${totalToPay}</p>
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
    </Link>
  );
};
