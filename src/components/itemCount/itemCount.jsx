import { useState } from "react";
import './itemCount.scss';

export const ItemCount = ({ stock, initial=1, onAdd }) => {
  const [stockDisponible, setStockDisponible] = useState(parseInt(stock));
  const [count, setCount] = useState(parseInt(initial));

  const handleCount = (operator) =>{
    const onPlus =() => {
      if (count < stock) {
        setCount(count + 1)
        setStockDisponible (stockDisponible - count)
      }   
    }
    const onSubstrack = () => {
      if (count > 1){
        setCount(count - 1)
        setStockDisponible (stockDisponible + count)
      }     
    }
    if (operator === "+") {
      return onPlus
    } else if (operator === "-"){
      return onSubstrack
    }
  }  

  return (
    <div className="itemCount">
      <div className="wrapper">      
        <div>
          <button className="onSubstrackButton" onClick={handleCount("-")} disabled={count <= 1}>
            ━
          </button>
        </div>
        <div>
          <p> {count} </p>
        </div>
        <div>
          <button className="onPlusButton" onClick={handleCount("+")} disabled={count >= stock}>
          ✚
          </button>
        </div>
      </div>
      <div>
        {/* eslint-disable-next-line*/}
        <button className="onAddButton" onClick={onAdd} value={count} type="submit" disabled={ stock == 0 }>Agregar al Carrito</button>                
      </div>     
    </div>
  )
}