import React, { useState, useContext, useEffect } from 'react'

export const CartContext = React.createContext({})
export const useCart = () => useContext(CartContext)
export const CartProvider = ({ children }) => {
  const [order, setOrder] = useState()

  const addItem = (itemId, amount) => {
    setOrder((prev) => {
      const count = order[itemId] ? order[itemId] + amount : amount
      return {
        ...prev,
        [itemId]: count,
      }
    })
  }

  const updateItem = (itemId, amount) => {
    setOrder((prev) => {
      return {
        ...prev,
        [itemId]: amount >= 0 ? amount : 0,
      }
    })
  }

  const removeItem = (itemId, amount) => {
    updateItem(itemId, order[itemId] - amount)
  }

  return (
    <CartContext.Provider value={{ order, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}
