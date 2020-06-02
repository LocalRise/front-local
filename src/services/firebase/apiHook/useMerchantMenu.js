import { useEffect, useState } from 'react'
import firestore from '../firestore'

const useMerchantMenu = (merchantId) => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const querySnapshot = await firestore
        .collection('RestaurantsDB')
        .doc(merchantId)
        .collection('MenuItem')
        .get()
      const snapshots = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      })
      setData(snapshots)
      setLoading(false)
    } catch (e) {
      setError(e)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return { data, error, loading }
}

export default useMerchantMenu
