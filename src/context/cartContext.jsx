import { createContext, useState } from "react"


export const CartContext = createContext([])

export const CartProvider = ({defaultValue= [], Children}) => {
    const [cart, setCart] = useState(defaultValue)

    const isInCart = (id) => {
        return cart.find(item => item.id === id) ? true : false
    }

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            item.quantity += quantity
        }
        setCart ({...cart, item})
    }

    const removeItem = (id) => {
        const newCart = cart.slice(id)
        return newCart
    }

    const clear = () => {
        console.log("Su carrito ha sido eliminado")
        setCart(defaultValue)
    }

    return <CartContext.Provider value= {{cart, addItem, isInCart, removeItem, clear, cartSize: cart.length}}> {Children} </CartContext.Provider>
}