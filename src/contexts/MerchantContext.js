import React, { useState, useContext, useEffect } from 'react'
import { firestore } from '../services/firebase'

export const MerchantContext = React.createContext({})
export const useMerchant = () => useContext(MerchantContext)
export const MerchantProvider = ({ children }) => {
  const [merchants, setMerchants] = useState({})
  const [menus, setMenus] = useState({})
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  const fetchMerchantList = async () => {
    setLoading(true)
    try {
      const querySnapshot = await firestore.collection('RestaurantsDB').get()
      const result = {}
      querySnapshot.docs.forEach((doc) => {
        result[doc.id] = {
          id: doc.id,
          ...doc.data(),
        }
      })
      setMerchants(result)
    } catch (e) {
      setError(e)
    }
    setLoading(false)
    return merchants
  }

  const fetchMerchantById = async (id) => {
    setLoading(true)
    try {
      const doc = await firestore.collection('RestaurantsDB').doc(id).get()
      setMerchants((prev) => {
        return {
          ...prev,
          [id]: {
            id: doc.id,
            ...doc.data(),
          },
        }
      })
    } catch (e) {
      setError(e)
    }
    setLoading(false)
    return merchants
  }

  const fetchMerchantMenuById = async (id) => {
    setLoading(true)
    try {
      const querySnapshot = await firestore
        .collection('RestaurantsDB')
        .doc(id)
        .collection('MenuItem')
        .get()
      const result = {}
      querySnapshot.docs.forEach((doc) => {
        result[doc.id] = {
          id: doc.id,
          ...doc.data(),
        }
      })
      setMenus((prev) => {
        return { ...prev, [id]: result }
      })
    } catch (e) {
      setError(e)
    }
    setLoading(false)
  }

  return (
    <MerchantContext.Provider
      value={{
        merchants,
        menus,
        fetchMerchantList,
        fetchMerchantMenuById,
        fetchMerchantById,
        error,
        loading,
      }}
    >
      {children}
    </MerchantContext.Provider>
  )
}
