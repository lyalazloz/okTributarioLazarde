import React, { useContext }  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from '../../context/cartContext'

export const CartWidget = () => {
  const cart = <FontAwesomeIcon icon={faShoppingCart} size="2x" inverse />;
  const { numberItems } = useContext(CartContext)

  return (
    <div className={`cartWidget ${numberItems > 0 ? 'shadow' : ''}`}>
      <div className="logoCartWidget" alt="Logo Carrito">{cart}︁</div>      
      <div className={`totalItems ${numberItems > 0 ? 'visibleClass' : 'inVisibleClass'}`}>{numberItems}</div>
    </div>
  )  
};