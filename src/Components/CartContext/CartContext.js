import React, {createContext, useState} from 'react'

export const Context = createContext()

export const CartContext = ({children}) => {

    const [cart, setCart] = useState([])
    const [qty, setQty] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (item, count) =>{
      if(isInCart(item.id)){
          cart.map((products) =>{
          if (products.id === item.id) {
            products.count += count
          }
          return products
        })
      }
      else{
        setCart([...cart,{...item, count}])
      }
      setQty(qty + count)
      setTotal(total + (item.price * count))
    }

    const deleteItem = (id) =>{
      const found = cart.find(products => products.id === id)
      setCart(cart.filter((item) => item.id !== id))
      setQty(qty - found.count)
      setTotal(total - (found.price * found.count))
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