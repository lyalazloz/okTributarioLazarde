import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



export const CartWidget = () => {
    const cart= <FontAwesomeIcon icon={faShoppingCart} size="2x" inverse/>
    
    return (    
        <div className= "cart">{cart}︁</div>        
    )
}
