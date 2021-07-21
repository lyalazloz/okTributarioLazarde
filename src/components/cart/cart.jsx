import React, { Fragment, useContext } from 'react'
import './cart.scss'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice, endPurchase/*, orderId */ } = useContext(CartContext)

  return (
  <Fragment> { cart.length === 0 ? (
    <div className='cartContainer'>
      <div className='noItemMessage'>
        <p > Por el momento no dispone de items agregados al carrito</p>
      </div>
      <Link to='/'>
        <p className='linkHome'>Volver al Inicio</p>
      </Link>
    </div>
    ):(
    <Fragment>
      <p className='totalPrice'>Precio Total:  <span>AR$ {totalPrice}</span></p>
      <div className='cartContainerButtons'>
        <button className='btnClean' onClick={() => clearCart()} >Limpiar Carrito</button>
        <button className='btnEndPurchase' onClick={() => endPurchase()} >Finalizar Compra</button>
      </div>
      <div className='cartContainer'>
        <div className='cartItem-row header-row' >
        <p className='orderNumber'>Nro</p>
        <p className='descripcion'>Descripcion</p>
        <p className='cantidad'>Cantidad</p>
        <p className='precio'>Precio</p>
        <p className='subtotal'>Subtotal</p>
        <p className='accion'>Accion</p>
      </div>
      {cart.map(
        ({ item, quantity }, index) => {
          return (
            <div className='cartItem-row'>
              <p className='orderNumber'>{index + 1}</p>
              <p className='descripcion'>{item.title}</p>
              <p className='cantidad'>{quantity}</p>
              <p className='precio'> $ {(item.price)}</p>
              <p className='subtotal'>$ {(item.price * quantity)}</p>
              <button className='accion btn-accion' 
              onClick={() => removeItem(item.id, quantity)}>Delete</button>
            </div>
          )
        })
      }
    </div>
    </Fragment>   
  )}
  </Fragment>
)}