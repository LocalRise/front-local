import React, { useContext } from 'react'

export const CartContext = React.createContext({})
export const useCart = () => useContext(CartContext)
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])

  const addCartItems = (addedItems) => {
    const newItems = [...items, ...addedItems]
    setItems(newItems)
  }

  const removeCartItem = () => {}

  return (
    <CartContext.Provider value={{ items, addCartItems }}>
      {children}
    </CartContext.Provider>
  )
}
