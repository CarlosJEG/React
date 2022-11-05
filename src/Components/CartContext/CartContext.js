import React, {createContext, useState, useEffect} from 'react'

export const Context = createContext()

export const CartContext = ({children}) => {

    const [cart, setCart] = useState([])
    const [qty, setQty] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (item, count) =>{
      setQty(qty + 1)
      setCart(item)
      console.log(count);
    }

    const deleteItem = (id) =>{
      setCart(cart.filter(item => item.id !== id))
    }

    const isInCart = (id) =>{
      return cart.some(item => item.id === id)
    }

    const clear = () =>{ 
      setCart([]);
      setQty(0);
      setTotal(0);
    }

  return (
    <Context.Provider value={{ cart, qty, total, addItem, deleteItem, isInCart, clear }}>
        {children}
    </Context.Provider>
  )
}
