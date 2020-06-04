import React, { useState, useContext, useEffect } from 'react'

/**
 * cart format =>
 * {
 *   menu1: 10,
 *   menu2: 40,
 * }
 */

export const CartContext = React.createContext({})
export const useCart = () => useContext(CartContext)
export const CartProvider = ({ children }) => {
  const [order, setOrder] = useState({})
  const [merchant, setMerchant] = useState(null)

  const actionCart = (merchantId) => {
    if (merchant === merchantId) return
    setMerchant(merchantId)
  }

  const addItem = (merchantId, itemId, amount) => {
    actionCart(merchantId)
    setOrder((prev) => {
      const count = order[itemId] ? order[itemId] + amount : amount
      return {
        ...prev,
        [itemId]: count,
      }
    })
  }

  const updateItem = (merchantId, itemId, amount) => {
    actionCart(merchantId)
    setOrder((prev) => {
      return {
        ...prev,
        [itemId]: amount >= 0 ? amount : 0,
      }
    })
  }

  const removeItem = (merchantId, itemId, amount) => {
    actionCart(merchantId)
    updateItem(itemId, order[itemId] - amount)
  }

  return (
    <CartContext.Provider value={{ merchant, order, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}
