import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const cart= <FontAwesomeIcon icon={faShoppingCart} size="2x" inverse/>

export const CartWidget = () => {
    return (    
        <div className= "cart">{cart}︁</div>        
    )
  }

