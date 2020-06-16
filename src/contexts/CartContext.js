import React, { useState, useContext, useEffect } from 'react'

import usePersistedState from '../hooks/usePersistedState'

export const CartContext = React.createContext({})
export const useCart = () => useContext(CartContext)
export const CartProvider = ({ children }) => {
  const [order, setOrder] = usePersistedState('order', {})

  const addItem = (merchantId, itemId, amount) => {
    setOrder((prev) => {
      let newAmount = prev[merchantId] ? prev[merchantId][itemId] : 0
      newAmount = typeof newAmount !== 'number' ? amount : amount + newAmount
      return {
        ...prev,
        [merchantId]: { ...prev[merchantId], [itemId]: newAmount },
      }
    })
  }

  const updateItem = (merchantId, itemId, amount) => {
    if (typeof order?.merchantId?.itemId === 'undefined') return
    if (typeof amount != 'number') return
    if (amount < 0) amount = 0

    setOrder((prev) => {
      return {
        ...prev,
        [merchantId]: { ...prev[merchantId], [itemId]: amount },
      }
    })
  }

  const removeItem = (merchantId, itemId, amount) => {
    if (typeof order?.merchantId?.itemId === 'undefined') return
    updateItem(merchantId, itemId, order[merchantId][itemId] - amount)
  }

  return (
    <CartContext.Provider value={{ order, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}
