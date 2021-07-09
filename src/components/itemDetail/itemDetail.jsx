import { React, useState } from "react";
import { Link } from 'react-router-dom'
import "./itemDetail.scss";
import { ItemCount } from "../itemCount/itemCount.jsx";

export const ItemDetail = ({ item }) => {
  let {id, title, price, pictureUrl, description, stock, alt} = item 
  const [countBought, setCountBought] = useState(0)
  const [totalToPay, setTotalToPay] = useState(0)

  const onAdd = (quantityToAdd) => {
    
    let bought= quantityToAdd.target.value
    setCountBought(bought)
    
    price= bought * price
    setTotalToPay(price)
    
    document.getElementById("buying").style.display="none"
    document.getElementById("bought").style.display="block"
    
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
            </div>
            <div id="buying">
              <ItemCount stock={stock} initial="1" onAdd={onAdd}/>
            </div>
            <div id="bought" style={{display: "none"}}>              
              <p>Estás comprando {countBought} {title} por ${totalToPay}</p>
              <Link to={'/cart'}>
                <button className="finishBuy">Terminar mi compra</button>
              </Link>
            </div>  
          </div>
        </div>
      </div>
    </article>
  );
};
