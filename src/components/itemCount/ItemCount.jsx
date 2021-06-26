import { useState } from "react";
import './itemCount.scss';

export const ItemCount = ({ stock, initial }) => {
  const [stockDisponible, setStockDisponible] = useState(parseInt(stock));
  const [count, setCount] = useState(parseInt(initial));

  const onAdd =() => {
    if (count < stock) {
      setCount(count + 1)
      setStockDisponible (stockDisponible - count)
    }
    else {
      <button className="onAddButton" disabled="disabled"></button>
    }    
  }
  
  const onSubstrack = () => {
    if (count > 1){
      setCount(count - 1)
      setStockDisponible (stockDisponible + count)
    }
    else {
      <button className="onSubstrackButton" disabled="disabled"></button>
    }
  }

  return (
    <div className="itemCount">
      <div className="wrapper">      
        <div>
          <button className="onSubstrackButton" onClick={onSubstrack}>
            ━
          </button>
        </div>
        <div>
          <p> {count} </p>
        </div>
        <div>
          <button className="onAddButton" onClick={onAdd}>
          ✚
          </button>
        </div>
      </div>
      <div>
        <button type="submit">Agregar al Carrito</button>
      </div>     
    </div>
  )
}
  
  