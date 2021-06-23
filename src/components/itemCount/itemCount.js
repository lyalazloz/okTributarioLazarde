import React, { useState } from 'react';
import './itemCount.css';

export const ItemCount = ({ stock, initial,  onAdd }) => {
  const [stockDisponible, setStockDisponible] = useState(parseInt(stock));
  const [count, setCount] = useState(parseInt(initial));

  return (
    <div>      
      <button onClick={() => {
        setCount(count - 1)
        setStockDisponible (stockDisponible + count)
        }}
        disabled={count<=initial}>
      ━
      </button>
      <p> {count} </p>
      <button onClick={() => {
        setCount(count + 1)
        setStockDisponible (stockDisponible - count)}}
        disabled={ count >= stock}>
      ✚
      </button>
      <div>
        <button type="submit" onClick={() => onAdd ()}>Agregar al Carrito</button>
      </div>     
    </div>
  );
}

