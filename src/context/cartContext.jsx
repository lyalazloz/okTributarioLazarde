import { useEffect } from "react";
import { createContext, useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({children, defaultValue=[],}) => {

    const [cart, setCart] = useState(defaultValue)
    const [quantity, setQuantity ] = useState(0)
    const [total, setTotal] = useState(0)

    const isInCart = (id) => {
        return cart.find(item => item.id === id) ? true : false
    }

    const addItem = (item, count) => {
        if (isInCart(item.id)) {
            const quantityToAdd = quantity + count
            setQuantity(quantityToAdd)
        }
        setCart ({...cart, item})        
    }

    const cartSize = cart.length

    const removeItem = (id) => {
        const newCart = cart.slice(id)
        setCart(newCart)
        return newCart        
    }

    const clear = () => {
        console.log("Su carrito ha sido eliminado")
        setCart(defaultValue)
    }
    
    // const getOrder = () => {
    //     const items = cart.map(
    //         ({ item }) => ({ id: item.id, title: item.title, price: item.price})
    //     )
    //     return {
    //         buyer: {
    //             name: "Lya",
    //             phone: "+54 911 12345678",
    //             email: "lyalazloz@oktributario.com",
    //         },
    //         items,
    //         total,
    //     }

    // }

    useEffect(() => {
        const nexTotal = cart.map(({item, quantity}) => item.price * quantity).reduce(
            ( cartTotalPrice , currentItemPrice) => cartTotalPrice + currentItemPrice, 0
        )
        setTotal(nexTotal)
    },[cart]) //total  cart

    return <CartContext.Provider value= {{addItem, cart, cartSize, clear, isInCart, removeItem, total}}> {children} </CartContext.Provider>
}